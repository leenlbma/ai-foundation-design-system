#!/usr/bin/env node
// Builds examples/resource-list.html from resource-list.src.html by inlining tokens/tokens.css.
// The light/dark variables are inlined as plain CSS (the Tailwind @theme block becomes :root).
// Usage: node examples/build-example.mjs [--tokens DIR] [--out DIR]
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const arg = (n, d) => (args.includes(n) ? args[args.indexOf(n) + 1] : d);
const tokensDir = arg('--tokens', join(here, '..', 'tokens'));
const outDir = arg('--out', here);
const css = readFileSync(join(tokensDir, 'tokens.css'), 'utf8').replace('@theme {', ':root {\n  color-scheme: light;');
const src = readFileSync(join(here, 'resource-list.src.html'), 'utf8');
const html = src.replace(/(\/\* tokens:start[^\n]*\*\/\n)[\s\S]*?(\/\* tokens:end \*\/)/, (_, a, b) => `${a}${css}${b}`);
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'resource-list.html'), html);
