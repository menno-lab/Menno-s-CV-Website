import { ScrollToView } from '@/navigation/hash-navigation/ScrollToView';
import { Hash } from '@/navigation/types';
import React, { PropsWithChildren } from 'react';
import { Box, Container, Heading, Stack, Text } from 'ui';

interface HomePageSectionProps {
    title: string;
    subtitle: string;
    hash: Hash;
}

export function HomePageSection({ title, subtitle, hash, children }: PropsWithChildren<HomePageSectionProps>) {
    return (
        <Container as='section' maxW={'7xl'}>
            <ScrollToView hash={hash}>
                <Stack py='10'>
                    <Heading as='h2'>{title}</Heading>
                    <Text>{subtitle}</Text>
                    <Box py={6}>{children}</Box>
                </Stack>
            </ScrollToView>
        </Container>
    );
}
