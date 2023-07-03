import { Collapse, Flex, Icon, Link, Stack, useDisclosure, Text, Divider, Box } from '@chakra-ui/react';
import React from 'react';
import { ChevronDownIcon } from 'ui';
import { NavbarDropdownProps } from './NavbarDropdown';

export function NavbarDropdownMobile({ cta, items, onChange, submenu }: NavbarDropdownProps) {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={onToggle}>
            <Flex py={2} as={Link} justify={'center'} align={'center'}>
                <Text fontWeight={600}>{cta}</Text>
                <Icon
                    as={ChevronDownIcon}
                    transition={'all .25s ease-in-out'}
                    transform={isOpen ? 'rotate(180deg)' : undefined}
                    w={6}
                    h={6}
                />
            </Flex>
            <Collapse in={isOpen} animateOpacity>
                <Stack mt={2} pl={4} borderLeft={1} borderStyle={'solid'} borderColor='gray.500' align={'start'}>
                    {items.map((item) => (
                        <Text key={item.key} py={2} onClick={() => onChange(item.key)}>
                            {item.label}
                        </Text>
                    ))}
                </Stack>
                {submenu && (
                    <Box py={4}>
                        <Divider />
                        <Stack mt={2} pl={4} borderLeft={1} borderStyle={'solid'} borderColor='gray.500' align={'start'}>
                            {submenu.items.map((item) => (
                                <Text key={item.key} py={2} onClick={() => submenu.onChange(item.key)}>
                                    {item.label}
                                </Text>
                            ))}
                        </Stack>
                    </Box>
                )}
            </Collapse>
        </Stack>
    );
}
