type colorScheme = string;
type ColorMode = 'light' | 'dark';

interface ThemeParams {
    background: string;
    primary: string;
    secondary: string;
    accent: string;
}

interface ThemeItem {
    light: ThemeParams;
    dark: ThemeParams;
}

interface ColorTheme {
    themeName: colorScheme;
    mode: ColorMode;
}
