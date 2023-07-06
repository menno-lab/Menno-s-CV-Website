import React from 'react';
import { Stack, Heading, Button, Flex, Text, Container, ProfilePicture, Link as ChakraLink, SlideInFade } from 'ui';
import { HeroTranslations } from './schema';
import { TechStack } from './TechStack';
import Link from 'next/link';
import { ButtonProps } from '@chakra-ui/react';

interface HeroSectionProps {
    translations: HeroTranslations;
}

export function HeroSection({ translations }: HeroSectionProps) {
    const { title, subtitle, primaryCta, secondaryCta, socialProof } = translations;

    const ctaProps: Partial<ButtonProps> = {
        size: 'lg',
        fontWeight: 600,
        px: 6,
        width: '100%',
    };

    return (
        <Container as='section' maxW={'7xl'} px={4} pt={{ base: '80px', md: 0 }}>
            <Stack spacing={6}>
                <Stack
                    align={'center'}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 2, md: 28 }}
                    direction={{ base: 'column-reverse', md: 'row' }}
                >
                    <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                        <Heading
                            lineHeight={1.1}
                            fontWeight={600}
                            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
                            textAlign={{ base: 'center', md: 'left' }}
                        >
                            <Text as={'span'} position={'relative'}>
                                {title}
                            </Text>
                        </Heading>
                        <Text lineHeight='28px'>{subtitle}</Text>
                        <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
                            <Link href='/contact'>
                                <Button {...ctaProps} colorScheme='primary'>
                                    {primaryCta}
                                </Button>
                            </Link>
                            <ChakraLink href='#projects'>
                                <Button {...ctaProps} colorScheme='secondary'>
                                    {secondaryCta}
                                </Button>
                            </ChakraLink>
                        </Stack>
                    </Stack>
                    <Flex flex={1} justifyContent={'center'} alignItems={'center'} w={{ base: '60vw', md: 'full' }}>
                        <SlideInFade from='right'>
                            <ProfilePicture />
                        </SlideInFade>
                    </Flex>
                </Stack>
                <Stack spacing={8}>
                    <Heading as='h3' fontSize='2xl' textAlign='center'>
                        {socialProof}
                    </Heading>
                    <TechStack />
                </Stack>
            </Stack>
        </Container>
    );
}
