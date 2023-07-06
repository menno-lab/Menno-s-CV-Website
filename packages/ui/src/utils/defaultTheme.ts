import { ThemeConfig } from '../types';

export function getDefaultTheme(): ThemeConfig {
    if (typeof window !== 'undefined') {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const localStorageTheme = localStorage.getItem('theme');
        localStorageTheme ? JSON.parse(localStorageTheme) : null;
        return localStorageTheme ? JSON.parse(localStorageTheme) : { themeName: 'neon', mode: prefersDarkMode ? 'dark' : 'light' };
    }
    return { themeName: 'neon', mode: 'light' };
}
