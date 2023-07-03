import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';
import { getOptions } from './settings';
import { Language, NameSpace } from './types';

export async function useTranslation(lang: Language, ns: NameSpace = 'common', keyPrefix?: string) {
    const instance = createInstance();
    await instance
        .use(initReactI18next)
        .use(resourcesToBackend((language: string, namespace: string) => import(`./locales/${language}/${namespace}.json`)))
        .init(getOptions(lang, ns));

    const t = instance.getFixedT(lang, ns, keyPrefix);
    return {
        t,
        i18n: instance,
    };
}
