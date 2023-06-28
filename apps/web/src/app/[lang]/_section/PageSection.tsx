import { title } from 'process';
import React, { PropsWithChildren } from 'react';
import { Container, Heading, Stack } from 'ui';

interface PageSectionProps {
    title: string;
}

export function PageSection({ title, children }: PropsWithChildren<PageSectionProps>) {
    return (
        <Container as='section' maxW={'7xl'} paddingTop={'80px'} height='100vh'>
            <Stack>
                <Heading>{title}</Heading>
                {children}
            </Stack>
        </Container>
    );
}
