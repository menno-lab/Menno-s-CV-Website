type colorScheme = string;
type ColorMode = 'light' | 'dark';
type SemanticColor = 'primary' | 'secondary' | 'background' | 'accent';

interface ThemeParams {
    background: string;
    primary: string;
    secondary: string;
    accent: string;
    text: string;
}

interface ThemeItem {
    light: ThemeParams;
    dark: ThemeParams;
}

interface ColorTheme {
    themeName: colorScheme;
    mode: ColorMode;
}
