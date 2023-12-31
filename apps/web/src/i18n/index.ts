import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';
import { getOptions } from './settings';
import { Language, NameSpace } from './types';

export async function useTranslation(lang: Language, ns: NameSpace = 'common', keyPrefix?: string): Promise<{ t: <T>(key: string) => T }> {
    const instance = createInstance();
    await instance
        .use(initReactI18next)
        .use(resourcesToBackend((language: string, namespace: string) => import(`./locales/${language}/${namespace}.json`)))
        .init(getOptions(lang, ns));

    return {
        t: <T>(key: string) => instance.getFixedT(lang, ns, keyPrefix)(key) as T,
    };
}
