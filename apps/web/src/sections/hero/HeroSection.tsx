import React from 'react';
import { Stack, Heading, Button, Flex, Box, Text, Container, ProfilePicture, Link, SlideInFade } from 'ui';
import { ClearHashAnchor } from './clearHashAnchor';
import { HeroTranslations } from './schema';
import { TechStack } from './TechStack';

interface HeroSectionProps {
    translations: HeroTranslations;
}

export function HeroSection({ translations }: HeroSectionProps) {
    const { title, subtitle, primaryCta, secondaryCta } = translations;
    return (
        <Container as='section' maxW={'7xl'} px={4} height='100vh'>
            <Box>
                <Stack spacing={6}>
                    <Stack
                        align={'center'}
                        spacing={{ base: 8, md: 10 }}
                        py={{ base: 2, md: 28 }}
                        direction={{ base: 'column-reverse', md: 'row' }}
                    >
                        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                            <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
                                <Text as={'span'} position={'relative'}>
                                    {title}
                                </Text>
                            </Heading>
                            <Text>{subtitle}</Text>
                            <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
                                <Button colorScheme='primary' size={'lg'} fontWeight={'normal'} px={6} width='100%'>
                                    {primaryCta}
                                </Button>
                                <ClearHashAnchor />
                                <Link href='#projects'>
                                    <Button colorScheme='secondary' size={'lg'} fontWeight={'normal'} px={6} width='100%'>
                                        {secondaryCta}
                                    </Button>
                                </Link>
                            </Stack>
                        </Stack>
                        <Flex flex={1} justifyContent={'center'} alignItems={'center'} w={'full'}>
                            <SlideInFade from='right'>
                                <ProfilePicture />
                            </SlideInFade>
                        </Flex>
                    </Stack>
                    <Box>
                        <TechStack />
                    </Box>
                </Stack>
            </Box>
        </Container>
    );
}
