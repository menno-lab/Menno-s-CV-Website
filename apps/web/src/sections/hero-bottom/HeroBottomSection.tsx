import React from 'react';
import { Box, Button, Container, Heading, Stack } from 'ui';
import Link from 'next/link';
import { HeroBottomTranslations } from './schema';

interface HeroBottomSectionProps {
    translations: HeroBottomTranslations;
}

export function HeroBottomSection({ translations }: HeroBottomSectionProps) {
    return (
        <Box bg='secondary' width='100vw' py='20'>
            <Container as='section' maxW={'7xl'}>
                <Stack alignItems={'center'} spacing={8}>
                    <Heading as='h2' textAlign='center' fontSize='3xl'>
                        {translations.title}
                    </Heading>
                    <Box width='md'>
                        <Link href='/contact'>
                            <Button colorScheme='accent' width='100%'>
                                {translations.cta}
                            </Button>
                        </Link>
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
}
