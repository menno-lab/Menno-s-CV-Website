export type ColorMode = 'light' | 'dark';

export interface ThemeParams {
    background: string;
    backgroundSecondary: string;
    primary: string;
    secondary: string;
    accent: string;
    text: string;
    hover: string;
}

export type SemanticColor = keyof ThemeParams;

export const THEME_NAMES = ['space', 'vintage', 'neon', 'pastel'] as const;
export type ThemeName = (typeof THEME_NAMES)[number];

export type BaseThemeConfig = Record<ThemeName, Record<ColorMode, Omit<ThemeParams, 'backgroundSecondary' | 'hover'>>>;

export interface ThemeConfig {
    themeName: ThemeName;
    mode: ColorMode;
}
