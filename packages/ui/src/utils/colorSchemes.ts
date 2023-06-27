export const COLOR_SCHEMES: Record<string, ThemeItem> = {
    space: {
        light: {
            background: '#DAFFFB',
            primary: '#64CCC5',
            secondary: '#176B87',
            accent: '#7B1FA2',
            text: '#001C30',
        },
        dark: {
            background: '#212121',
            primary: '#00A48B',
            secondary: '#176B87',
            accent: '#F56565',
            text: '#FFFFFF',
        },
    },
    vintage: {
        light: {
            background: '#F8F1F1',
            primary: '#025464',
            secondary: '#E57C23',
            accent: '#F56565',
            text: '#000000',
        },
        dark: {
            background: '#025464',
            primary: '#E8AA42',
            secondary: '#E57C23',
            accent: '#F56565',
            text: '#F8F1F1',
        },
    },
    neon: {
        light: {
            background: '#B6EAFA',
            primary: '#FF55BB',
            secondary: '#FFB84C',
            accent: '#A459D1',
            text: '#000000',
        },
        dark: {
            background: '#191825',
            primary: '#865DFF',
            secondary: '#E384FF',
            accent: '#FFA3FD',
            text: '#FFFFFF',
        },
    },
    pastel: {
        light: {
            background: '#FDF4F5',
            primary: '#BA90C6',
            secondary: '#E8A0BF',
            accent: '#C0DBEA',
            text: '#000000',
        },
        dark: {
            background: '#374259',
            primary: '#5C8984',
            secondary: '#CBB279',
            accent: '#545B77',
            text: '#FFFFFF',
        },
    },
};

export const COLOR_SCHEME_NAMES = Object.keys(COLOR_SCHEMES);
