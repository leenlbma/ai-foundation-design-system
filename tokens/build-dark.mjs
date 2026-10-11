#!/usr/bin/env node
// Builds tokens/tokens.css and tokens/tokens.json from DESIGN.md.
// Light tokens come from the official @google/design.md exporter unchanged.
// Colors named `dark-*` in DESIGN.md are moved out of the light theme and
// emitted as dark-mode variables (.dark + prefers-color-scheme) / a `color-dark` group.
// Usage: node tokens/build-dark.mjs [--out DIR] [--report]
import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const outDir = args.includes('--out') ? args[args.indexOf('--out') + 1] : join(root, 'tokens');
const exp = (f) => execFileSync('npx', ['-y', '@google/design.md', 'export', join(root, 'DESIGN.md'), '--format', f], { encoding: 'utf8' });

// ---- read colors from the YAML front matter (flat `name: 'value'` lines) ----
const src = readFileSync(join(root, 'DESIGN.md'), 'utf8');
const block = src.split('\ncolors:\n')[1].split(/\n\S/)[0];
const colors = {};
for (const m of block.matchAll(/^  ([\w-]+): '([^']+)'$/gm)) colors[m[1]] = m[2];
const dark = {};
const light = {};
for (const [k, v] of Object.entries(colors)) k.startsWith('dark-') ? (dark[k.slice(5)] = v) : (light[k] = v);

// ---- contrast ----
const parse = (v) => {
  if (v.startsWith('#')) return { rgb: [1, 3, 5].map((i) => parseInt(v.slice(i, i + 2), 16)), a: 1 };
  const n = v.match(/[\d.]+/g).map(Number);
  return { rgb: n.slice(0, 3), a: n[3] ?? 1 };
};
const flat = (fg, bg) => fg.rgb.map((x, i) => x * fg.a + bg.rgb[i] * (1 - fg.a));
const L = (c) => { const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; }; return 0.2126 * f(c[0]) + 0.7152 * f(c[1]) + 0.0722 * f(c[2]); };
const ratio = (fg, bg, t) => { const a = L(flat(t[fg], t[bg])), b = L(t[bg].rgb); return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05); };
const parsed = (o) => Object.fromEntries(Object.entries(o).map(([k, v]) => [k, parse(v)]));
const P = { dark: parsed(dark), light: parsed(light) };
const surfaces = ['surface-layout', 'surface', 'surface-container', 'surface-elevated'];
const checks = []; // [label, fg, bg, min]
for (const t of ['on-surface', 'on-surface-variant', 'on-surface-tertiary', 'primary', 'primary-hover', 'success-text', 'warning-text', 'error', 'ai-accent', 'knowledge-accent', 'tool-accent'])
  for (const s of surfaces) checks.push([`text ${t} on ${s}`, t, s, 4.5]);
checks.push(['text on-primary on primary', 'on-primary', 'primary', 4.5], ['text on-primary on primary-hover', 'on-primary', 'primary-hover', 4.5],
  ['text on-primary on primary-active', 'on-primary', 'primary-active', 4.5], ['text on-primary on error', 'on-primary', 'error', 4.5], ['text on-primary on error-hover', 'on-primary', 'error-hover', 4.5]);
for (const [c, f] of [['ai-accent-container', 'ai-accent'], ['knowledge-container', 'knowledge-accent'], ['tool-container', 'tool-accent'], ['risk-container', 'on-surface'], ['ai-accent-container', 'on-surface'], ['knowledge-container', 'on-surface'], ['tool-container', 'on-surface']])
  checks.push([`text ${f} on ${c}`, f, c, 4.5]);
for (const s of surfaces) for (const t of ['outline-control', 'focus-ring', 'success', 'warning', 'error']) checks.push([`non-text ${t} on ${s}`, t, s, 3]);
for (const s of ['surface', 'surface-container']) checks.push([`non-text primary on ${s}`, 'primary', s, 3]);
const rows = checks.map(([l, f, b, min]) => ({ l, r: ratio(f, b, P.dark), min }));
const bad = rows.filter((x) => x.r < x.min);
if (args.includes('--report')) {
  console.log('| token | light | dark | contrast vs dark surface (on-surface-* / accents) |');
  for (const k of Object.keys(dark)) console.log(`| ${k} | ${light[k]} | ${dark[k]} |`);
  for (const x of rows) console.log(`${x.r.toFixed(2)}\t(min ${x.min})\t${x.l}`);
}
if (bad.length) { console.error('Dark contrast failures:\n' + bad.map((x) => `  ${x.r.toFixed(2)} < ${x.min}  ${x.l}`).join('\n')); process.exit(1); }
const missing = Object.keys(light).filter((k) => !(k in dark));
if (missing.length) { console.error('Missing dark values for: ' + missing.join(', ')); process.exit(1); }

// ---- CSS ----
let css = exp('css-tailwind').split('\n').filter((l) => !l.includes('--color-dark-')).join('\n');
const hexOf = (v) => v; // keep authored value
const vars = Object.entries(dark).map(([k, v]) => `--color-${k}: ${hexOf(v)};`);
const body = (ind) => vars.map((l) => ind + l).join('\n');
css = css.replace(/\n*$/, '\n') + `
/* Dark mode: follows the system unless the page sets .light; add .dark to force it. */
@media (prefers-color-scheme: dark) {
  :root:not(.light) {
    color-scheme: dark;
${body('    ')}
  }
}

.dark {
  color-scheme: dark;
${body('  ')}
}
`;

// ---- JSON ----
const json = JSON.parse(exp('dtcg'));
const cd = { $type: 'color' };
for (const k of Object.keys(json.color)) if (k.startsWith('dark-')) { cd[k.slice(5)] = json.color[k]; delete json.color[k]; }
json['color-dark'] = cd;

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'tokens.css'), css);
writeFileSync(join(outDir, 'tokens.json'), JSON.stringify(json, null, 2) + '\n');
