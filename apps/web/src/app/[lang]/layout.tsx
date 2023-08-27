import type { Metadata } from 'next';
import { ChakraProviders, Container } from 'ui';
import './globals.css';
import { Footer } from '@/layout/Footer';
import { Navbar } from '@/navigation/nav-bar/Navbar';

export const metadata: Metadata = {
    title: 'Menno Jager',
    description: "Menno Jager's personal website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body>
                <ChakraProviders>
                    <Navbar />
                    <Container maxW={'7xl'} px={4} pt='100px'>
                        {children}
                    </Container>
                    <Footer />
                </ChakraProviders>
            </body>
        </html>
    );
}
