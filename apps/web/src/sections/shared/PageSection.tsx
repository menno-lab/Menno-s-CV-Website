import React, { PropsWithChildren } from 'react';
import { Box, Container, Heading, Stack } from 'ui';
import { ScrollToView } from './ScrollToView';

interface PageSectionProps {
    title: string;
}

export function PageSection({ title, children }: PropsWithChildren<PageSectionProps>) {
    return (
        <Container as='section' px={4} maxW={'7xl'} background='red'>
            <ScrollToView hash='#projects'>
                <Stack>
                    <Heading as='h2'>{title}</Heading>
                    <Box>{children}</Box>
                </Stack>
            </ScrollToView>
        </Container>
    );
}
