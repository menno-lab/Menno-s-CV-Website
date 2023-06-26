import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, DarkMode, LightMode, extendTheme } from '@chakra-ui/react';
import { PropsWithChildren, createContext, useContext, useState } from 'react';
import { COLOR_SCHEMES } from '../utils/colorSchemes';

interface ColorModeState {
    theme: ThemeParams;
    themeConfig: ColorTheme;
    changeTheme: (newTheme: ColorTheme) => void;
}

const ColorThemeContext = createContext<ColorModeState>({} as ColorModeState);

export function ThemeProvider({ children }: PropsWithChildren<{}>) {
    const [themeConfig, setThemeConfig] = useState<ColorTheme>({ themeName: 'classic', mode: 'dark' });

    function changeTheme(newTheme: ColorTheme) {
        setThemeConfig(newTheme);
    }

    const theme: ThemeParams = COLOR_SCHEMES[themeConfig.themeName][themeConfig.mode];

    const chakraTheme = extendTheme({
        colors: theme,
        components: {
            Text: {
                baseStyle: {
                    color: theme.primary,
                },
            },
        },
    });

    return (
        <CacheProvider>
            <ColorThemeContext.Provider value={{ theme, changeTheme, themeConfig }}>
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
