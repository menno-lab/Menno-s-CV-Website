import { CacheProvider } from '@chakra-ui/next-js';
import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react';
import { PropsWithChildren, createContext, useContext, useState } from 'react';
import { COLOR_SCHEMES } from '../utils/colorSchemes';
import { makeColorBrighter, makeColorDarker } from '../utils/modifyColor';
import { ThemeConfig, ThemeParams } from '../types';

interface ColorModeState {
    theme: ThemeParams;
    themeConfig: ThemeConfig;
    changeTheme: (newTheme: ThemeConfig) => void;
}

const ColorThemeContext = createContext<ColorModeState>({} as ColorModeState);

export function ThemeProvider({ children }: PropsWithChildren<{}>) {
    const [themeConfig, setThemeConfig] = useState<ThemeConfig>({ themeName: 'space', mode: 'light' });

    function changeTheme(newTheme: ThemeConfig) {
        setThemeConfig(newTheme);
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

    const chakraTheme = extendTheme({
        semanticTokens: {
            colors: theme,
        },
        styles: {
            global: {
                body: {
                    overflowX: 'hidden',
                },
            },
        },
        components: {
            Button: {
                baseStyle: {
                    _focus: {
                        color: '#FFFFFF',
                    },
                },
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
            Icon: {
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
            FormLabel: {
                baseStyle: {
                    color: theme.text,
                },
            },
            Kbd: {
                baseStyle: {
                    color: 'black',
                },
            },
            Divider: {
                baseStyle: {
                    borderColor: isDarkMode ? 'gray.200' : 'gray.400',
                },
            },
        },
    });

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
