import { dir } from 'i18next';
import { languages } from '../../i18n/settings';
import { ThemeProvider } from 'ui';
import { NavItem, RouteWithChildren } from '../../utils/types';
import { Navbar } from '../../components/navbar/Navbar';
import { useTranslation } from '../../i18n';
import { ReactQueryProvider } from '../../utils/ReactQuery';
import { Footer } from '../../components/footer/Footer';

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
                <ReactQueryProvider>
                    <ThemeProvider>
                        <Navbar navItems={navItems} />
                        {children}
                        <Footer />
                    </ThemeProvider>
                </ReactQueryProvider>
            </body>
        </html>
    );
}
