import { NextRequest, NextResponse } from 'next/server';
import acceptLanguage from 'accept-language';
import { languages, fallbackLang } from './i18n/settings';
import { i18nCookieName } from './i18n/utils/constants';

acceptLanguage.languages([...languages]);

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)'],
};

export function middleware(req: NextRequest) {
    let lang;
    if (req.cookies.has(i18nCookieName)) lang = acceptLanguage.get(req.cookies.get(i18nCookieName)?.value);
    if (!lang) lang = acceptLanguage.get(req.headers.get('Accept-Language'));
    if (!lang) lang = fallbackLang;

    // Redirect if lang in path is not supported
    if (!languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) && !req.nextUrl.pathname.startsWith('/_next')) {
        return NextResponse.redirect(new URL(`/${lang}${req.nextUrl.pathname}`, req.url));
    }

    if (req.headers.has('referer')) {
        const refererUrl = new URL(req.headers.get('referer')!);
        const langInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`));
        const response = NextResponse.next();
        if (langInReferer) response.cookies.set(i18nCookieName, langInReferer);
        return response;
    }

    return NextResponse.next();
}
