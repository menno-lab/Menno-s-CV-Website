export const COLOR_SCHEMES: Record<string, ThemeItem> = {
    classic: {
        light: {
            background: '#FFFFFF',
            primary: '#000000',
            secondary: '#808080',
            accent: '#FFFFFF',
            text: '#000000',
        },
        dark: {
            background: '#212121',
            primary: '#7B1FA2',
            secondary: '#FFEB3B',
            accent: '#00E5FF',
            text: '#FFFFFF',
        },
    },
    elegant: {
        light: {
            background: '#F5F5F5',
            primary: '#212121',
            secondary: '#607D8B',
            accent: '#FFFFFF',
            text: '#000000',
        },
        dark: {
            background: '#212121',
            primary: '#FFFFFF',
            secondary: '#607D8B',
            accent: '#FFFFFF',
            text: '#FFFFFF',
        },
    },
    sunrise: {
        light: {
            background: '#FFEB3B',
            primary: '#F44336',
            secondary: '#009688',
            accent: '#FFFFFF',
            text: '#000000',
        },
        dark: {
            background: '#263238',
            primary: '#FFFFFF',
            secondary: '#009688',
            accent: '#FFFFFF',
            text: '#FFFFFF',
        },
    },
    retro: {
        light: {
            background: '#7B1FA2',
            primary: '#00E5FF',
            secondary: '#FF5722',
            accent: '#FFFFFF',
            text: '#000000',
        },
        dark: {
            background: '#212121',
            primary: '#FFEB3B',
            secondary: '#FF5722',
            accent: '#FFFFFF',
            text: '#FFFFFF',
        },
    },
    sciFi: {
        light: {
            background: '#0D47A1',
            primary: '#FFC107',
            secondary: '#00E5FF',
            accent: '#FFFFFF',
            text: '#000000',
        },
        dark: {
            background: '#000000',
            primary: '#FFC107',
            secondary: '#00E5FF',
            accent: '#FFFFFF',

            text: '#FFFFFF',
        },
    },
    pastel: {
        light: {
            background: '#E0E0E0',
            primary: '#FF4081',
            secondary: '#9C27B0',
            accent: '#03A9F4',
            text: '#000000',
        },
        dark: {
            background: '#212121',
            primary: '#FF4081',
            secondary: '#9C27B0',
            accent: '#03A9F4',
            text: '#FFFFFF',
        },
    },
};

export const COLOR_SCHEME_NAMES = Object.keys(COLOR_SCHEMES);
