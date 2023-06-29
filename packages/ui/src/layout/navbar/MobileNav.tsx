import { Link } from '@chakra-ui/next-js';
import { Flex, Stack, useColorModeValue, Text } from '@chakra-ui/react';
import { useTheme } from '../../context/ColorModeProvider';
import { NavItem } from '.';

interface MobileNavProps {
    navItems: NavItem[];
}

export function MobileNav({ navItems }: MobileNavProps) {
    const { theme } = useTheme();
    return (
        <Stack bg={theme.background} p={4} display={{ md: 'none' }}>
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
