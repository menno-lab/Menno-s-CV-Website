import { cookies } from 'next/headers';
import { Language } from '../settings';
import { i18nCookieName } from './constants';

export function getLanguage(): Language {
    const requestCookie = cookies().get(i18nCookieName);
    if (!requestCookie) {
        return 'en';
    }
    return requestCookie.value as Language;
}
