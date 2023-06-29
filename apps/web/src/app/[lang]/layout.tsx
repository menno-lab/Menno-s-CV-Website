import { dir } from 'i18next';
import { languages } from '../../i18n/settings';
import { ThemeProvider } from 'ui';
import { RouteWithChildren } from '../../utils/types';
import { Navbar } from '../_nav/Navbar';

export const metadata = {
    title: "Menno's CV Website",
    description: 'Menno Jager CV Website',
};

export async function generateStaticParams() {
    return languages.map((lang) => ({ lang }));
}

export default async function RootLayout({ children, params: { lang } }: RouteWithChildren) {
    return (
        <html lang={lang} dir={dir(lang)}>
            <body>
                <ThemeProvider>
                    <Navbar />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
