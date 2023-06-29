import React from 'react';
import { Box, Button, Container, Flex, ThemeSelector, Stack, Text, Link as ChakraLink } from 'ui';
import { MobileNav } from './MobileNav';
import { NavItem } from '../../utils/types';
import Link from 'next/link';

interface NavbarProps {
    navItems: NavItem[];
}

export function Navbar({ navItems }: NavbarProps) {
    if (!Array.isArray(navItems)) {
        return null;
    }

    return (
        <Box bg='background' position='fixed' width='100vw' zIndex={2} top={0} boxShadow={'md'}>
            <Container maxW={'7xl'} py={2} px={4}>
                <Flex minH={'60px'} py={{ base: 2 }} alignItems={'center'}>
                    <MobileNav navItems={navItems} />
                    <Flex flex={{ base: 1 }} justifyContent={{ base: 'center', md: 'start' }}>
                        <Link href='/'>
                            <Text fontFamily={'heading'} fontWeight={600}>
                                Menno Jager
                            </Text>
                        </Link>
                        <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                            <Stack direction={'row'} spacing={4}>
                                {navItems.map((navItem) => (
                                    <Box key={navItem.label}>
                                        <ChakraLink p={2} href={`#${navItem.href}`} fontWeight={500}>
                                            {navItem.label}
                                        </ChakraLink>
                                    </Box>
                                ))}
                                <ThemeSelector themeCopy={'Theme'} />
                            </Stack>
                        </Flex>
                    </Flex>
                    <Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} direction={'row'} spacing={6}>
                        <Link href='/contact'>
                            <Button variant='primary' display={{ base: 'none', md: 'inline-flex' }} fontSize={'sm'} fontWeight={600}>
                                Contact
                            </Button>
                        </Link>
                    </Stack>
                </Flex>
            </Container>
        </Box>
    );
}
