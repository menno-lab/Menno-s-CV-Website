export type NameSpace = 'common';

export const fallbackLang = 'en';
export const languages = [fallbackLang, 'de', 'fi', 'fr', 'jp', 'kr', 'nl', 'se', 'vn'] as const;
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

interface LanguageDetails {
    name: string;
    nativeName: string;
}

type LanguageMap = Record<Language, LanguageDetails>;

export const languagesMap: LanguageMap = {
    en: {
        name: 'English',
        nativeName: 'English',
    },
    de: {
        name: 'German',
        nativeName: 'Deutsche',
    },
    fi: {
        name: 'Finnish',
        nativeName: 'Suomalainen',
    },
    fr: {
        name: 'French',
        nativeName: 'Français',
    },
    jp: {
        name: 'Japanese',
        nativeName: '日本語',
    },
    kr: {
        name: 'Korean',
        nativeName: '한국어',
    },
    nl: {
        name: 'Dutch',
        nativeName: 'Nederlands',
    },
    se: {
        name: 'Swedish',
        nativeName: 'Svenska',
    },
    vn: {
        name: 'Vietnamese',
        nativeName: 'Tiếng Việt',
    },
};
