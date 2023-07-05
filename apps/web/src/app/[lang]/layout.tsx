import '../../app.css';
import { dir } from 'i18next';
import { languages } from '../../i18n/settings';
import { ThemeProvider } from 'ui';
import { RouteWithChildren } from '../../utils/types';
import { useTranslation } from '../../i18n';
import { ReactQueryProvider } from '../../utils/ReactQuery';
import { Footer } from '../../components/footer/Footer';
import { footerTranslationSchema } from '../../components/footer/schema';
import { FloatingActionButton } from '../../components/chat/FloatingActionButton';
import { chatTranslationsSchema } from '../../components/chat/schema';
import { InitializeAnalytics } from 'analytics';
import { navbarTranslationsSchema } from '../../features/navigation/components/schema';
import { Navbar } from '../../features/navigation/components/Navbar';

export const metadata = {
    title: "Menno's CV Website",
    description: 'Menno Jager CV Website',
};

export async function generateStaticParams() {
    return languages.map((lang) => ({ lang }));
}

export default async function RootLayout({ children, params: { lang } }: RouteWithChildren) {
    const { t } = await useTranslation(lang);

    return (
        <html lang={lang} dir={dir(lang)}>
            <body>
                <ReactQueryProvider>
                    <ThemeProvider>
                        <Navbar lang={lang} translations={navbarTranslationsSchema.parse(t('nav'))} />
                        {children}
                        <Footer translations={footerTranslationSchema.parse(t('footer'))} />
                        <FloatingActionButton translations={chatTranslationsSchema.parse(t('chat'))} />
                        <InitializeAnalytics />
                    </ThemeProvider>
                </ReactQueryProvider>
            </body>
        </html>
    );
}
