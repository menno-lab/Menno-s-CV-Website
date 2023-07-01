import { ThemeParams } from '../types';

export function getThemeConfig(theme: ThemeParams, isDarkMode: boolean) {
    return {
        semanticTokens: {
            colors: theme,
        },
        components: {
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
    };
}
