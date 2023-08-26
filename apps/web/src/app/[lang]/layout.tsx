import type { Metadata } from 'next';
import { RouteWithChildren } from '../_types';
import { ChakraProviders } from 'ui';
import './globals.css';
import { Navbar } from '@/navigation/Navbar';
import { Footer } from '@/footer/Footer';

export const metadata: Metadata = {
    title: 'Menno Jager',
    description: "Menno Jager's personal website",
};

export default function RootLayout({ children, params: { lang } }: RouteWithChildren) {
    return (
        <html lang='en'>
            <body>
                <ChakraProviders>
                    <Navbar lang={lang} />
                    {children}
                    <Footer />
                </ChakraProviders>
            </body>
        </html>
    );
}
