import React, { PropsWithChildren } from 'react';
import { Box, Container, Heading, Stack, Text } from 'ui';

interface HomePageSectionProps {
    title: string;
    subtitle: string;
    id: string;
}

export function HomePageSection({ title, subtitle, id, children }: PropsWithChildren<HomePageSectionProps>) {
    return (
        <Container as='section' maxW={'7xl'} id={id}>
            <Stack py='10'>
                <Heading as='h2' fontSize={{ base: '2xl', md: '3xl' }}>
                    {title}
                </Heading>
                <Text>{subtitle}</Text>
                <Box py={6}>{children}</Box>
            </Stack>
        </Container>
    );
}
