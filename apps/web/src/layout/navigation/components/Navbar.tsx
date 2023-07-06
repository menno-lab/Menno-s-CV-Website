import React from 'react';
import { Box, Button, Container, Flex, Stack, Text, Link } from 'ui';
import { MobileNav } from './MobileNav';
import NextLink from 'next/link';
import { ThemeSelector } from './navbar-dropdown/ThemeSelector';
import { HashLink } from './HashLink';
import { NavbarTranslations } from '../schema';
import { NavbarVisibilityController } from './NavbarVisibilityController';
import { Language } from '../../../i18n/settings';

interface NavbarProps {
    lang: Language;
    translations: NavbarTranslations;
}

export function Navbar({ lang, translations }: NavbarProps) {
    const { theme, contact, navItems } = translations;

    return (
        <NavbarVisibilityController>
            <Box bg='background' position='fixed' width='100vw' zIndex={2} top={0} boxShadow={'md'}>
                <Container maxW={'7xl'} py={2} px={4}>
                    <Flex minH={'60px'} py={{ base: 2 }} alignItems={'center'}>
                        <MobileNav translations={translations} />
                        <Flex flex={{ base: 1 }} justifyContent={{ base: 'center', md: 'start' }} alignItems='center'>
                            <Link as={NextLink} href='/'>
                                <Text fontFamily={'heading'} fontWeight={700}>
                                    Menno Jager
                                </Text>
                            </Link>
                            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                                <Stack direction={'row'} spacing={4}>
                                    {navItems.map(({ href, label }) => (
                                        <HashLink key={href} href={`#${href}`}>
                                            {label}
                                        </HashLink>
                                    ))}
                                    <ThemeSelector cta={theme} />
                                </Stack>
                            </Flex>
                        </Flex>
                        <Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} direction={'row'} spacing={6}>
                            <Link as={NextLink} href={`/${lang}/contact`}>
                                <Button
                                    colorScheme='primary'
                                    display={{ base: 'none', md: 'inline-flex' }}
                                    fontSize={'sm'}
                                    fontWeight={600}
                                >
                                    {contact}
                                </Button>
                            </Link>
                        </Stack>
                    </Flex>
                </Container>
            </Box>
        </NavbarVisibilityController>
    );
}
