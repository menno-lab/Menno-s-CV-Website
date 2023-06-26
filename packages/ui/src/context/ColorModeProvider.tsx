'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, ComponentStyleConfig, extendTheme } from '@chakra-ui/react';
import { PropsWithChildren, createContext, useContext, useState } from 'react';
import { COLOR_SCHEMES } from '../utils/colorSchemes';

interface ColorModeState {
    theme: ColorTheme;
    selectedTheme: ThemeParams;
    changeTheme: (newTheme: ColorTheme) => void;
}

const ColorThemeContext = createContext<ColorModeState>({} as ColorModeState);

export function ThemeProvider({ children }: PropsWithChildren<{}>) {
    const [theme, setTheme] = useState<ColorTheme>({ themeName: 'sunrise', mode: 'light' });

    function changeTheme(newTheme: ColorTheme) {
        setTheme(newTheme);
    }

    const selectedTheme: ThemeParams = COLOR_SCHEMES[theme.themeName][theme.mode];

    const chakraTheme = extendTheme({
        colors: selectedTheme,
        components: {
            Text: {
                baseStyle: {
                    color: selectedTheme.primary,
                    backgroundColor: '#46f700',
                },
            },
        },
    });

    return (
        <CacheProvider>
            <ColorThemeContext.Provider value={{ theme, changeTheme, selectedTheme }}>
                <ChakraProvider theme={chakraTheme}>{children}</ChakraProvider>
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
