'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { chakraTheme } from './theme';

export function ChakraProviders({ children }: { children: React.ReactNode }) {
    return (
        <CacheProvider>
            <ChakraProvider theme={chakraTheme}>{children}</ChakraProvider>
        </CacheProvider>
    );
}
