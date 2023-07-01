export interface RouteWithChildren {
    children: React.ReactNode;
    params: {
        lang: Language;
    };
}

export interface ComponentWithLang {
    lang: Language;
}
