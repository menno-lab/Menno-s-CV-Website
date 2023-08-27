import React from 'react';
import { NavbarVisibilityController } from './NavbarVisibilityController';
import { Box, Button, Container, Flex, Stack, Text } from 'ui';
import Link from 'next/link';
import { HashLink } from './HashLink';
import { MobileNav } from './MobileNav';
import { useTranslation } from '@/i18n';
import { NavItem } from '../types';
import { ColorModeSwitch } from '@/layout/components/ColorModeSwitch';
import { LanguageSelector } from '@/layout/components/LanguageSelector';
import { Language } from '@/i18n/types';

interface NavbarProps {
    lang: Language;
}

export async function Navbar({ lang }: NavbarProps) {
    const { t } = await useTranslation(lang, 'common', 'nav');
    const navItems = t<NavItem[]>('navItems');
    return (
        <NavbarVisibilityController>
            <Container maxW={'7xl'} py={2} px={4}>
                <Flex minH={'60px'} py={{ base: 2 }} alignItems={'center'}>
                    <MobileNav lang={lang} />
                    <Flex flex={{ base: 1 }} justifyContent={{ base: 'center', md: 'start' }} alignItems='center'>
                        <Link href='/'>
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
                            </Stack>
                        </Flex>
                    </Flex>
                    <Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} direction={'row'} spacing={6}>
                        <ColorModeSwitch />
                        <Box display={{ base: 'none', md: 'block' }}>
                            <LanguageSelector lang={lang} />
                        </Box>
                        <Link href={`/${lang}/contact`}>
                            <Button colorScheme='primary' display={{ base: 'none', md: 'inline-flex' }} fontSize={'sm'} fontWeight={600}>
                                {t('contact')}
                            </Button>
                        </Link>
                    </Stack>
                </Flex>
            </Container>
        </NavbarVisibilityController>
    );
}
