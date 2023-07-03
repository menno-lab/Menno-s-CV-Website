import { CacheProvider } from '@chakra-ui/next-js';
import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react';
import { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';
import { COLOR_SCHEMES } from '../utils/colorSchemes';
import { makeColorBrighter, makeColorDarker } from '../utils/modifyColor';
import { ThemeConfig, ThemeParams } from '../types';
import { getThemeConfig } from '../utils/getThemeConfig';
import { LoadingScreen } from '../components';

interface ColorModeState {
    theme: ThemeParams;
    themeConfig: ThemeConfig;
    changeTheme: (newTheme: ThemeConfig) => void;
}

const ColorThemeContext = createContext<ColorModeState>({} as ColorModeState);

export function ThemeProvider({ children }: PropsWithChildren<{}>) {
    const [themeConfig, setThemeConfig] = useState<ThemeConfig | null>(null);

    function changeTheme(newTheme: ThemeConfig) {
        localStorage.setItem('theme', JSON.stringify(newTheme));
        setThemeConfig(newTheme);
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const localStorageTheme = localStorage.getItem('theme');
            localStorageTheme ? JSON.parse(localStorageTheme) : null;
            const theme = localStorageTheme
                ? JSON.parse(localStorageTheme)
                : { themeName: 'neon', mode: prefersDarkMode ? 'dark' : 'light' };
            setThemeConfig(theme);
        }
    }, []);

    if (!themeConfig) {
        return <LoadingScreen />;
    }

    const baseTheme = COLOR_SCHEMES[themeConfig.themeName][themeConfig.mode];
    const isDarkMode = themeConfig.mode === 'dark';
    const backgroundSecondary = isDarkMode ? makeColorBrighter(baseTheme.background, 0.2) : makeColorDarker(baseTheme.background, 0.2);
    const hover = isDarkMode ? makeColorBrighter(baseTheme.background, 0.1) : makeColorDarker(baseTheme.background, 0.1);

    const theme: ThemeParams = {
        ...baseTheme,
        backgroundSecondary,
        hover,
    };

    const chakraTheme = extendTheme(getThemeConfig(theme, isDarkMode));

    return (
        <CacheProvider>
            <ColorThemeContext.Provider value={{ theme, changeTheme, themeConfig }}>
                <ChakraProvider theme={chakraTheme} resetCSS>
                    <Box bg={theme.background} width='100vw'>
                        {children}
                    </Box>
                </ChakraProvider>
            </ColorThemeContext.Provider>
        </CacheProvider>
    );
}

export function useTheme() {
    const context = useContext(ColorThemeContext);
    if (!context) {
        throw new Error('useTheme must be used in ColorThemeContext provider');
    }
    return context;
}
