import { Language } from './types';

export const fallbackLang = 'en';
export const languages = [fallbackLang, 'nl', 'vn'];
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

export const languagesMap: Record<Language, string> = {
    en: 'English',
    nl: 'Dutch',
    vn: 'Vietnamese',
};
