import React, { PropsWithChildren } from 'react';
import { Box, Container, Heading, Stack, Text } from 'ui';
import { ScrollToView } from './ScrollToView';

interface PageSectionProps {
    title: string;
    subtitle: string;
}

export function PageSection({ title, subtitle, children }: PropsWithChildren<PageSectionProps>) {
    return (
        <Container as='section' maxW={'7xl'}>
            <ScrollToView hash='#projects'>
                <Stack py='20'>
                    <Heading as='h2'>{title}</Heading>
                    <Text>{subtitle}</Text>
                    <Box py={6}>{children}</Box>
                </Stack>
            </ScrollToView>
        </Container>
    );
}
