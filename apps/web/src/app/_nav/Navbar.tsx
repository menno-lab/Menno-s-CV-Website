import React from 'react';
import { useTranslation } from '../../i18n';
import { Box, Button, Container, Flex, ThemeSelector, Stack, Text, Link } from 'ui';
import { MobileNav } from './MobileNav';
import { NavItem } from '../../utils/types';

export async function Navbar() {
    const { t } = await useTranslation('en');
    const navItems = t('navItems') as unknown as NavItem[];

    return (
        <Box bg='background' position='fixed' width='100vw' zIndex={2} top={0} borderBottom={1} borderStyle={'solid'}>
            <Container maxW={'7xl'} py={2} px={4}>
                <Flex minH={'60px'} py={{ base: 2 }} alignItems={'center'}>
                    <MobileNav navItems={navItems} />
                    <Flex flex={{ base: 1 }} justifyContent={{ base: 'center', md: 'start' }}>
                        <Text fontFamily={'heading'} fontWeight={600}>
                            Menno Jager
                        </Text>
                        <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                            <Stack direction={'row'} spacing={4}>
                                {navItems.map((navItem) => (
                                    <Box key={navItem.label}>
                                        <Link p={2} href={`#${navItem.href}`} fontWeight={500}>
                                            {navItem.label}
                                        </Link>
                                    </Box>
                                ))}
                                <ThemeSelector themeCopy={'Theme'} />
                            </Stack>
                        </Flex>
                    </Flex>
                    <Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} direction={'row'} spacing={6}>
                        <Button variant='primary' display={{ base: 'none', md: 'inline-flex' }} fontSize={'sm'} fontWeight={600}>
                            Sign Up
                        </Button>
                    </Stack>
                </Flex>
            </Container>
        </Box>
    );
}
