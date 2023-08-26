export const fallbackLang = 'en';
export const languages = [fallbackLang] as const;
export const defaultNS = 'translation';

export type Language = (typeof languages)[number];

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
