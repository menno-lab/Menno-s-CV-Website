import React from 'react';
import { NavbarVisibilityController } from './NavbarVisibilityController';
import { Box, Button, Container, Flex, Stack, Text } from 'ui';
import Link from 'next/link';
import { HashLink } from './HashLink';
import { MobileNav } from './MobileNav';
import { NavItem } from './types';
import { Language } from '@/i18n/settings';
import { useTranslation } from '@/i18n';

export async function Navbar({ lang }: { lang: Language }) {
    const { t } = await useTranslation('common', 'nav');
    const navItems = t<NavItem[]>('navItems');
    return (
        <NavbarVisibilityController>
            <Box position='fixed' width='100vw' zIndex={2} top={0} borderBottom='1px' borderColor='inherit'>
                <Container maxW={'7xl'} py={2} px={4}>
                    <Flex minH={'60px'} py={{ base: 2 }} alignItems={'center'}>
                        <MobileNav />
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
                            <Link href={`/${lang}/contact`}>
                                <Button
                                    colorScheme='primary'
                                    display={{ base: 'none', md: 'inline-flex' }}
                                    fontSize={'sm'}
                                    fontWeight={600}
                                >
                                    {t('contact')}
                                </Button>
                            </Link>
                        </Stack>
                    </Flex>
                </Container>
            </Box>
        </NavbarVisibilityController>
    );
}
