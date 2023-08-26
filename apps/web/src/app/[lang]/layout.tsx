import type { Metadata } from 'next';
import { RouteWithChildren } from '../_types';
import { ChakraProviders, Container } from 'ui';
import './globals.css';
import { Navbar } from '@/navigation/Navbar';
import { Footer } from '@/layout/Footer';

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
                    <Container maxW={'7xl'} px={4} pt='100px'>
                        {children}
                    </Container>
                    <Footer />
                </ChakraProviders>
            </body>
        </html>
    );
}
