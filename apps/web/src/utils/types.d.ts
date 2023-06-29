export type Language = 'en' | 'vn' | 'nl' | 'fi';

export interface RouteWithChildren {
    children: React.ReactNode;
    params: {
        lang: Language;
    };
}

export interface ComponentWithLang {
    lang: Language;
}

export interface NavItem {
    label: string;
    href: string;
}
