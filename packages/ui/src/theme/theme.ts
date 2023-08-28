import { mode } from '@chakra-ui/theme-tools';
import { extendTheme, ThemeComponents, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
    useSystemColorMode: true,
    initialColorMode: 'system',
};

const components: ThemeComponents = {
    Heading: {
        baseStyle: (props) => ({
            color: mode('black', 'white')(props),
        }),
    },
    Text: {
        baseStyle: (props) => ({
            color: mode('black', 'white')(props),
        }),
        variants: {
            label: (props) => ({
                color: mode('gray.800', 'gray.400')(props),
            }),
        },
    },
    Spinner: {
        baseStyle: {
            color: 'primary.500',
        },
    },
};

const colors = {
    primary: {
        50: '#c180fd',
        100: '#b466fc',
        200: '#a84dfc',
        300: '#9b33fb',
        400: '#8f1afb',
        500: '#8200fa',
        600: '#7500e1',
        700: '#6800c8',
        800: '#5b00af',
        900: '#4e0096',
    },
    secondary: {
        50: '#a2cee8',
        100: '#8fc4e3',
        200: '#7cbadf',
        300: '#69b1da',
        400: '#57a7d6',
        500: '#449DD1',
        600: '#3d8dbc',
        700: '#367ea7',
        800: '#306e92',
        900: '#295e7d',
    },
};

export const chakraTheme = extendTheme({
    config,
    colors,
    components,
});
