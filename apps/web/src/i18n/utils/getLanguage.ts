import { cookies } from 'next/headers';
import { fallbackLang, i18nCookieName } from './constants';
import { Language } from '../types';

export function getLanguage(): Language {
    const requestCookie = cookies().get(i18nCookieName);
    if (!requestCookie) {
        return fallbackLang;
    }
    return requestCookie.value as Language;
}

export function setLanguage(lang: Language) {
    cookies().set(i18nCookieName, lang);
}
