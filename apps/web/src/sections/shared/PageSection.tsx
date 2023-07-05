import React, { PropsWithChildren } from 'react';
import { Box, Container, Heading, Stack, Text } from 'ui';
import { ScrollToView } from './ScrollToView';
import { Hash } from '../../utils/types';

interface PageSectionProps {
    title: string;
    subtitle: string;
    hash: Hash;
}

export function PageSection({ title, subtitle, hash, children }: PropsWithChildren<PageSectionProps>) {
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
