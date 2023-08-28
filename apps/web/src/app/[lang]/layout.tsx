import type { Metadata } from 'next';
import { dir } from 'i18next';
import { Container } from 'ui';
import './globals.css';
import { ChatWidget } from '@/chat-widget/ChatWidget';
import { Language } from '@/i18n/types';
import { languages } from '@/i18n/utils/constants';
import { ChakraProviders } from '@/providers/ChakraProviders';
import { ReactQueryProvider } from '@/providers/ReactQueryProvider';
import { Footer } from '@/layout/Footer';
import { Navbar } from '@/layout/navbar/Navbar';

export const metadata: Metadata = {
    title: 'Menno Jager',
    description: "Menno Jager's personal website",
};

export async function generateStaticParams() {
    return languages.map((lang) => ({ lang }));
}

interface RootLayoutProps {
    children: React.ReactNode;
    params: { lang: Language };
}

export default function RootLayout({ children, params: { lang } }: RootLayoutProps) {
    return (
        <html lang={lang} dir={dir(lang)}>
            <body>
                <ReactQueryProvider>
                    <ChakraProviders>
                        <Navbar lang={lang} />
                        <Container maxW={'7xl'} px={4} pt='100px'>
                            {children}
                        </Container>
                        <Footer />
                        <ChatWidget lang={lang} />
                    </ChakraProviders>
                </ReactQueryProvider>
            </body>
        </html>
    );
}
