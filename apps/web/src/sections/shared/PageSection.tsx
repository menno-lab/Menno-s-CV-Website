import React, { PropsWithChildren } from 'react';
import { Box, Container, Heading, Stack } from 'ui';
import { ScrollToView } from './ScrollToView';

interface PageSectionProps {
    title: string;
}

export function PageSection({ title, children }: PropsWithChildren<PageSectionProps>) {
    return (
        <Container as='section' maxW={'7xl'}>
            <ScrollToView hash='#projects'>
                <Stack>
                    <Heading as='h2'>{title}</Heading>
                    <Box py={6}>{children}</Box>
                </Stack>
            </ScrollToView>
        </Container>
    );
}
