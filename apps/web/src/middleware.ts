import { NextRequest, NextResponse } from 'next/server';
import { fallbackLang, i18nCookieName, languages } from './i18n/utils/constants';
import { Language } from './i18n/types';

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

export function middleware(req: NextRequest) {
    const langPath = req.nextUrl.pathname.substring(1) as Language;

    if (languages.includes(langPath)) {
        const response = NextResponse.next();
        response.cookies.set(i18nCookieName, langPath);
        return response;
    }

    const langCookie = req.cookies.get(i18nCookieName);
    if (langCookie) {
        return NextResponse.redirect(new URL(`/${langCookie.value}${req.nextUrl.pathname}`, req.url));
    }

    return NextResponse.redirect(new URL(`/${fallbackLang}${req.nextUrl.pathname}`, req.url));
}
