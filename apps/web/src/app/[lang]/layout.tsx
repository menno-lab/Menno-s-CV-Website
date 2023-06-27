import { dir } from 'i18next';
import { languages } from '../../i18n/settings';
import { ThemeProvider, Navbar, NavItem } from 'ui';
import { RouteWithChildren } from '../../utils/types';
import { useTranslation } from '../../i18n';

export const metadata = {
    title: "Menno's CV Website",
    description: 'Menno Jager CV Website',
};

export async function generateStaticParams() {
    return languages.map((lang) => ({ lang }));
}

export default async function RootLayout({ children, params: { lang } }: RouteWithChildren) {
    const { t } = await useTranslation(lang);
    const navItems = t('navItems') as unknown as NavItem[];
    return (
        <html lang={lang} dir={dir(lang)}>
            <body>
                <ThemeProvider>
                    <Navbar navItems={navItems} />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
