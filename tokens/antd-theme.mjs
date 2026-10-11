#!/usr/bin/env node
// Generates Ant Design v5 ThemeConfig from tokens/tokens.json (itself generated from DESIGN.md).
// Writes tokens/antd-theme.json (plain data) and tokens/antd-theme.js (importable ESM).
// Usage: node tokens/antd-theme.mjs [--in DIR] [--out DIR]
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const arg = (n, d) => (args.includes(n) ? args[args.indexOf(n) + 1] : d);
const inDir = arg('--in', here);
const outDir = arg('--out', here);
const tk = JSON.parse(readFileSync(join(inDir, 'tokens.json'), 'utf8'));

// "#rrggbbaa" -> "rgba(r, g, b, a)"; opaque values stay upper-case hex
const css = (hex) => {
  if (hex.length === 9) {
    const n = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
    const a = Math.round((parseInt(hex.slice(7, 9), 16) / 255) * 100) / 100;
    return `rgba(${n.join(', ')}, ${a})`;
  }
  return hex.toUpperCase();
};
const withAlpha = (hex, a) => { const n = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16)); return `rgba(${n.join(', ')}, ${a})`; };
const px = (g, k) => g[k].$value.value;

// antd token -> DESIGN.md color token
const MAP = {
  colorPrimary: 'primary', colorPrimaryHover: 'primary-hover', colorPrimaryActive: 'primary-active',
  colorSuccess: 'success', colorWarning: 'warning', colorError: 'error', colorErrorHover: 'error-hover',
  colorErrorBg: 'risk-container', colorInfo: 'info',
  colorText: 'on-surface', colorTextSecondary: 'on-surface-variant', colorTextTertiary: 'on-surface-tertiary',
  colorTextQuaternary: 'on-surface-disabled', colorTextDisabled: 'on-surface-disabled',
  colorTextLightSolid: 'on-primary',
  colorBgLayout: 'surface-layout', colorBgContainer: 'surface', colorBgElevated: 'surface-elevated',
  colorFillAlter: 'surface-container', colorBgMask: 'scrim',
  colorBorder: 'outline-control', colorBorderSecondary: 'outline', colorSplit: 'outline-variant',
};

function build(colors) {
  const c = (k) => css(colors[k].$value.hex);
  const token = {};
  for (const [a, d] of Object.entries(MAP)) token[a] = c(d);
  token.controlOutline = withAlpha(colors['focus-ring'].$value.hex, 0.2);
  token.colorLink = c('primary');
  const sh = c('shadow-color');
  Object.assign(token, {
    boxShadow: `0 2px 8px 0 ${sh}`,
    boxShadowSecondary: `0 6px 16px 0 ${sh}`,
    boxShadowTertiary: `0 9px 28px 8px ${sh}`,
  });
  return token;
}

const shared = {
  fontFamily: tk.typography['body-md'].$value.fontFamily,
  fontFamilyCode: tk.typography.code.$value.fontFamily,
  fontSize: tk.typography['body-md'].$value.fontSize.value,
  fontSizeLG: tk.typography['body-lg'].$value.fontSize.value,
  fontSizeSM: tk.typography['body-sm'].$value.fontSize.value,
  borderRadius: px(tk.rounded, 'DEFAULT'),
  borderRadiusLG: px(tk.rounded, 'lg'),
  borderRadiusSM: px(tk.rounded, 'md'),
  borderRadiusXS: px(tk.rounded, 'sm'),
  controlHeight: px(tk.spacing, 'control-height'),
  controlHeightLG: px(tk.spacing, 'control-height-lg'),
  lineWidthFocus: px(tk.spacing, 'focus-ring-width'),
  sizeUnit: px(tk.spacing, 'unit'),
};

// antd tokens that have no DESIGN.md counterpart, and DESIGN.md tokens with no antd counterpart
const unmapped = {
  designTokensWithoutAntdField: [
    'success-text', 'warning-text (use colorSuccessText / colorWarningText only if you set them yourself; antd derives its own)',
    'ai-accent, ai-accent-container, knowledge-accent, knowledge-container, tool-accent, tool-container (AI semantic objects; use the CSS variables or a team component)',
    'overlay-edge (dark popover highlight line; antd has no overlay border token)',
    'chart-1..8 and chart-seq (antd has no chart palette; antd Charts / AntV use their own)',
    'dark-* component states beyond those listed (e.g. input-border-hover/focus/error) are antd component tokens, not seeds',
  ],
  approximations: [
    'controlOutline: antd uses a translucent glow, mapped to focus-ring at 20% alpha. antd draws it only around some controls; the solid 2px focus-ring needs CSS (outline: var(--color-focus-ring))',
    'colorTextQuaternary and colorTextDisabled both use on-surface-disabled',
    'colorBorder uses outline-control (3:1 for inputs); colorBorderSecondary uses outline; colorSplit uses outline-variant',
    'colorFillAlter uses surface-container (table header, striped rows)',
    'box shadows: sizes are taken from DESIGN.md Level 1 to 3; colors from shadow-color. In dark mode antd still draws them, so also add overlay-edge on popovers',
    'darkAlgorithm re-derives seed colors, so antd-theme.js adds a second algorithm that pins every listed token back to its DESIGN.md value; all unlisted tokens stay antd-derived',
  ],
  antdTokensWithoutDesignToken: [
    'colorFill, colorFillSecondary, colorFillTertiary, colorFillQuaternary, colorPrimaryBg, colorPrimaryBorder, colorSuccessBg, colorWarningBg, colorInfoBg and the other derived *Bg / *Border / *Text* variants: generated by the antd algorithm',
    'motion* and zIndex* tokens: not defined in DESIGN.md colors/spacing',
  ],
};

const light = { token: { ...shared, ...build(tk.color) } };
const dark = { algorithm: ['darkAlgorithm', 'pinDesignTokens (returns { ...map, ...token })'], token: { ...shared, ...build(tk['color-dark']) } };

const data = { $description: 'Ant Design v5 ThemeConfig generated from DESIGN.md. Do not edit by hand.', light, dark, unmapped };
const js = `// Generated from DESIGN.md by tokens/antd-theme.mjs. Do not edit by hand.
// Usage: <ConfigProvider theme={getAntdTheme(isDark ? 'dark' : 'light')}>
import { theme } from 'antd';

export const lightTheme = ${JSON.stringify(light, null, 2)};

const darkTokens = ${JSON.stringify(dark.token, null, 2)};

// darkAlgorithm re-derives seed colors (colorPrimary, colorError, ...) and would drift from DESIGN.md.
// This second algorithm runs after it and pins every token we define back to its DESIGN.md value.
const pinDesignTokens = (seed, map) => ({ ...map, ...darkTokens });

export const darkTheme = {
  algorithm: [theme.darkAlgorithm, pinDesignTokens],
  token: darkTokens,
};

export const getAntdTheme = (mode) => (mode === 'dark' ? darkTheme : lightTheme);
export default getAntdTheme;
`;
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'antd-theme.json'), JSON.stringify(data, null, 2) + '\n');
writeFileSync(join(outDir, 'antd-theme.js'), js);
