import { Language, LanguageDetails } from '../types';

export const i18nCookieName = 'i18next';
export const fallbackLang = 'en';
export const languages = [fallbackLang, 'de', 'fi', 'fr', 'jp', 'kr', 'nl', 'se', 'vn'] as const;

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
