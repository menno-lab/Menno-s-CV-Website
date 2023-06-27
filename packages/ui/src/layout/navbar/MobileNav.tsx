import { Link } from '@chakra-ui/next-js';
import { Flex, Stack, useColorModeValue, Text } from '@chakra-ui/react';
import { NavItem } from './Navbar';

interface MobileNavProps {
    navItems: NavItem[];
}

export function MobileNav({ navItems }: MobileNavProps) {
    return (
        <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
            {navItems.map((navItem) => (
                <MobileNavItem key={navItem.label} navItem={navItem} />
            ))}
        </Stack>
    );
}

function MobileNavItem({ navItem }: { navItem: NavItem }) {
    return (
        <Stack spacing={4}>
            <Flex
                py={2}
                as={Link}
                href={navItem.href ?? '#'}
                justify={'space-between'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                }}
            >
                <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
                    {navItem.label}
                </Text>
            </Flex>
        </Stack>
    );
}
