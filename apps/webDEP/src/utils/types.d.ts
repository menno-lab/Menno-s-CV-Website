export interface RouteWithChildren {
    children: React.ReactNode;
    params: {
        lang: Language;
    };
}

export interface RouteWithLang {
    params: {
        lang: Language;
    };
}

export type Hash = `#${string}`;