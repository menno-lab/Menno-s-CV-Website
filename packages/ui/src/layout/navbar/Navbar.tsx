import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Link } from '@chakra-ui/next-js';
import { Box, Text, useDisclosure, Flex, IconButton, useBreakpointValue, Stack, Button, Collapse, Container } from '@chakra-ui/react';
import { MobileNav } from './MobileNav';
import { ThemeSelector } from './ThemeSelector';
import { useTheme } from '../../context/ColorModeProvider';

export interface NavItem {
    label: string;
    href: string;
}

interface NavbarProps {
    navItems: NavItem[];
}

export function Navbar({ navItems }: NavbarProps) {
    const { isOpen, onToggle } = useDisclosure();
    const { theme } = useTheme();

    return (
        <Box bg={theme.background} position='fixed' width='100vw' zIndex={2} top={0} borderBottom={1} borderStyle={'solid'}>
            <Container maxW={'7xl'} px={0} py={2}>
                <Flex minH={'60px'} py={{ base: 2 }} align={'center'}>
                    <Flex flex={{ base: 1, md: 'auto' }} ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
                        <IconButton
                            onClick={onToggle}
                            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
                            variant={'ghost'}
                            aria-label={'Toggle Navigation'}
                        />
                    </Flex>
                    <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                        <Text textAlign={useBreakpointValue({ base: 'center', md: 'left' })} fontFamily={'heading'}>
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
            <Collapse in={isOpen} animateOpacity>
                <MobileNav navItems={navItems} />
            </Collapse>
        </Box>
    );
}
