import { CacheProvider } from '@chakra-ui/next-js';
import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react';
import { PropsWithChildren, createContext, useContext, useState } from 'react';
import { COLOR_SCHEMES } from '../utils/colorSchemes';

interface ColorModeState {
    theme: ThemeParams;
    themeConfig: ColorTheme;
    changeTheme: (newTheme: ColorTheme) => void;
}

const ColorThemeContext = createContext<ColorModeState>({} as ColorModeState);

const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

export function ThemeProvider({ children }: PropsWithChildren<{}>) {
    const [themeConfig, setThemeConfig] = useState<ColorTheme>({ themeName: 'space', mode: prefersDarkMode ? 'dark' : 'light' });

    function changeTheme(newTheme: ColorTheme) {
        setThemeConfig(newTheme);
    }

    const theme: ThemeParams = COLOR_SCHEMES[themeConfig.themeName][themeConfig.mode];

    const chakraTheme = extendTheme({
        semanticTokens: {
            colors: theme,
        },
        components: {
            Button: {
                variants: {
                    primary: {
                        bg: theme.primary,
                        color: '#FFFFFF',
                    },
                    secondary: {
                        bg: theme.secondary,
                        color: '#FFFFFF',
                    },
                },
            },
            Text: {
                baseStyle: {
                    color: theme.text,
                },
            },
            Link: {
                baseStyle: {
                    color: theme.text,
                },
            },
            Heading: {
                baseStyle: {
                    color: theme.text,
                },
            },
            Kbd: {
                baseStyle: {
                    color: 'black',
                },
            },
        },
    });

    return (
        <CacheProvider>
            <ColorThemeContext.Provider value={{ theme, changeTheme, themeConfig }}>
                <ChakraProvider theme={chakraTheme}>
                    <Box bg={theme.background} zIndex={-5} minHeight={'100vh'}>
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
