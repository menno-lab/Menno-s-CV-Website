'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, chakraTheme } from 'ui';

export function ChakraProviders({ children }: { children: React.ReactNode }) {
    return (
        <CacheProvider>
            <ChakraProvider theme={chakraTheme}>{children}</ChakraProvider>
        </CacheProvider>
    );
}
