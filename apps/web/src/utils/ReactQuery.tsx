'use client';

import React, { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { trpc } from './trpc';
import { httpBatchLink } from '@trpc/react-query';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            staleTime: 30 * 60 * 1000,
        },
    },
});

export function ReactQueryProvider({ children }: PropsWithChildren<{}>) {
    return (
        <trpc.Provider
            client={trpc.createClient({
                links: [
                    httpBatchLink({
                        url: process.env.NEXT_PUBLIC_API_BASE_URL!,
                    }),
                ],
            })}
            queryClient={queryClient}
        >
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </trpc.Provider>
    );
}
