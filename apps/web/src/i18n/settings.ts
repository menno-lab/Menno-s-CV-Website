import { Language, NameSpace } from './types';
import { fallbackLang, languages } from './utils/constants';

export function getOptions(lng: Language, ns: NameSpace) {
    return {
        supportedLngs: languages,
        fallbackLang,
        lng,
        fallbackNS: 'common',
        defaultNS: 'common',
        ns,
        returnObjects: true,
    };
}
