import '../../app.css';
import { dir } from 'i18next';
import { languages } from '../../i18n/settings';
import { ThemeProvider } from 'ui';
import { RouteWithChildren } from '../../utils/types';
import { useTranslation } from '../../i18n';
import { InitializeAnalytics } from 'analytics';
import { ReactQueryProvider } from '../../layout/ReactQuery';
import { Navbar } from '../../layout/navigation/components/Navbar';
import { FloatingActionButton } from '../../chat-widget/FloatingActionButton';
import { chatTranslationsSchema } from '../../chat-widget/schema';
import { Footer } from '../../layout/footer/Footer';
import { footerTranslationSchema } from '../../layout/footer/schema';
import { navbarTranslationsSchema } from '../../layout/navigation/schema';

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
