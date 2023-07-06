export type NameSpace = 'common';

export const fallbackLang = 'en';
export const languages = [fallbackLang, 'nl', 'vn', 'fi', 'de'] as const;
export type Language = (typeof languages)[number];
export const defaultNS = 'translation';

export function getOptions(lng = fallbackLang, ns = defaultNS) {
    return {
        supportedLngs: languages,
        fallbackLang,
        lng,
        fallbackNS: defaultNS,
        defaultNS,
        ns,
        returnObjects: true,
    };
}

interface LanguageMap {
    [key: string]: {
        name: string;
        nativeName: string;
    };
}

export const languagesMap: LanguageMap = {
    en: {
        name: 'English',
        nativeName: 'English',
    },
    nl: {
        name: 'Dutch',
        nativeName: 'Nederlands',
    },
    vn: {
        name: 'Vietnamese',
        nativeName: 'Tiếng Việt',
    },
    fi: {
        name: 'Finnish',
        nativeName: 'Suomalainen',
    },
    de: {
        name: 'German',
        nativeName: 'Deutsche',
    },
};
