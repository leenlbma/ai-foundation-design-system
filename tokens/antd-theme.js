// Generated from DESIGN.md by tokens/antd-theme.mjs. Do not edit by hand.
// Usage: <ConfigProvider theme={getAntdTheme(isDark ? 'dark' : 'light')}>
import { theme } from 'antd';

export const lightTheme = {
  "token": {
    "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif",
    "fontFamilyCode": "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
    "fontSize": 14,
    "fontSizeLG": 16,
    "fontSizeSM": 12,
    "borderRadius": 6,
    "borderRadiusLG": 8,
    "borderRadiusSM": 4,
    "borderRadiusXS": 2,
    "controlHeight": 32,
    "controlHeightLG": 40,
    "lineWidthFocus": 2,
    "sizeUnit": 4,
    "colorPrimary": "#0958D9",
    "colorPrimaryHover": "#1265E0",
    "colorPrimaryActive": "#003EB3",
    "colorSuccess": "#389E0D",
    "colorWarning": "#D46B08",
    "colorError": "#CF1322",
    "colorErrorHover": "#A8071A",
    "colorErrorBg": "#FFF1F0",
    "colorInfo": "#0958D9",
    "colorText": "rgba(0, 0, 0, 0.88)",
    "colorTextSecondary": "rgba(0, 0, 0, 0.65)",
    "colorTextTertiary": "rgba(0, 0, 0, 0.58)",
    "colorTextQuaternary": "rgba(0, 0, 0, 0.25)",
    "colorTextDisabled": "rgba(0, 0, 0, 0.25)",
    "colorTextLightSolid": "#FFFFFF",
    "colorBgLayout": "#F5F5F5",
    "colorBgContainer": "#FFFFFF",
    "colorBgElevated": "#FFFFFF",
    "colorFillAlter": "#FAFAFA",
    "colorBgMask": "rgba(0, 0, 0, 0.45)",
    "colorBorder": "#8C8C8C",
    "colorBorderSecondary": "#D9D9D9",
    "colorSplit": "#F0F0F0",
    "controlOutline": "rgba(22, 119, 255, 0.2)",
    "colorLink": "#0958D9",
    "boxShadow": "0 2px 8px 0 rgba(0, 0, 0, 0.15)",
    "boxShadowSecondary": "0 6px 16px 0 rgba(0, 0, 0, 0.15)",
    "boxShadowTertiary": "0 9px 28px 8px rgba(0, 0, 0, 0.15)"
  }
};

const darkTokens = {
  "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif",
  "fontFamilyCode": "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
  "fontSize": 14,
  "fontSizeLG": 16,
  "fontSizeSM": 12,
  "borderRadius": 6,
  "borderRadiusLG": 8,
  "borderRadiusSM": 4,
  "borderRadiusXS": 2,
  "controlHeight": 32,
  "controlHeightLG": 40,
  "lineWidthFocus": 2,
  "sizeUnit": 4,
  "colorPrimary": "#4096FF",
  "colorPrimaryHover": "#69B1FF",
  "colorPrimaryActive": "#2B85F5",
  "colorSuccess": "#73D13D",
  "colorWarning": "#FFA940",
  "colorError": "#FF7875",
  "colorErrorHover": "#FFA39E",
  "colorErrorBg": "#2A1215",
  "colorInfo": "#4096FF",
  "colorText": "rgba(255, 255, 255, 0.88)",
  "colorTextSecondary": "rgba(255, 255, 255, 0.68)",
  "colorTextTertiary": "rgba(255, 255, 255, 0.58)",
  "colorTextQuaternary": "rgba(255, 255, 255, 0.3)",
  "colorTextDisabled": "rgba(255, 255, 255, 0.3)",
  "colorTextLightSolid": "#0A0A0A",
  "colorBgLayout": "#0D0D0D",
  "colorBgContainer": "#141414",
  "colorBgElevated": "#262626",
  "colorFillAlter": "#1F1F1F",
  "colorBgMask": "rgba(0, 0, 0, 0.65)",
  "colorBorder": "#8C8C8C",
  "colorBorderSecondary": "#424242",
  "colorSplit": "#303030",
  "controlOutline": "rgba(105, 177, 255, 0.2)",
  "colorLink": "#4096FF",
  "boxShadow": "0 2px 8px 0 rgba(0, 0, 0, 0.6)",
  "boxShadowSecondary": "0 6px 16px 0 rgba(0, 0, 0, 0.6)",
  "boxShadowTertiary": "0 9px 28px 8px rgba(0, 0, 0, 0.6)"
};

// darkAlgorithm re-derives seed colors (colorPrimary, colorError, ...) and would drift from DESIGN.md.
// This second algorithm runs after it and pins every token we define back to its DESIGN.md value.
const pinDesignTokens = (seed, map) => ({ ...map, ...darkTokens });

export const darkTheme = {
  algorithm: [theme.darkAlgorithm, pinDesignTokens],
  token: darkTokens,
};

export const getAntdTheme = (mode) => (mode === 'dark' ? darkTheme : lightTheme);
export default getAntdTheme;
