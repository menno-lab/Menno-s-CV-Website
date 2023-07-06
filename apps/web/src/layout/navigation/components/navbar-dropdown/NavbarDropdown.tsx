import {
    Button,
    Flex,
    Menu,
    MenuButton,
    MenuList,
    Text,
    MenuOptionGroup,
    MenuItemOption,
    Kbd,
    MenuDivider,
    useBreakpoint,
} from '@chakra-ui/react';
import React from 'react';
import { ChevronDownIcon, useTheme } from 'ui';

export interface NavbarItem {
    key: string;
    label: string;
}

export interface NavbarDropdownProps {
    cta: string;
    items: NavbarItem[];
    onChange: (value: string) => void;
    submenu?: {
        items: NavbarItem[];
        onChange: (value: string) => void;
    };
}

export function NavbarDropdown({ cta, items, onChange, submenu }: NavbarDropdownProps) {
    const { theme, themeConfig } = useTheme();
    const breakPoint = useBreakpoint();
    const showKeyboardShortcut = breakPoint !== 'base';

    return (
        <Menu>
            <MenuButton as={Button} variant='link' rightIcon={<ChevronDownIcon />} color={theme.text}>
                <Text>{cta}</Text>
            </MenuButton>
            <MenuList bg={theme.backgroundSecondary} borderColor={theme.hover}>
                <MenuOptionGroup
                    type='radio'
                    value={themeConfig.themeName}
                    onChange={(value) => {
                        onChange(value as string);
                    }}
                >
                    {items.map((item) => (
                        <MenuItemOption
                            key={item.key}
                            value={item.key}
                            _hover={{ bg: theme.hover }}
                            _focus={{ bg: theme.hover }}
                            color={theme.text}
                            bg={theme.backgroundSecondary}
                        >
                            <Flex justifyContent='space-between'>
                                <Text textTransform='capitalize'>{item.label}</Text>
                                {showKeyboardShortcut && <Kbd>{item.key[0]}</Kbd>}
                            </Flex>
                        </MenuItemOption>
                    ))}
                </MenuOptionGroup>
                {submenu && (
                    <>
                        <MenuDivider />
                        <MenuOptionGroup
                            type='radio'
                            value={themeConfig.mode}
                            onChange={(value) => {
                                submenu.onChange(value as string);
                            }}
                        >
                            {submenu.items.map((item) => (
                                <MenuItemOption
                                    key={item.key}
                                    value={item.key}
                                    _hover={{ bg: theme.hover }}
                                    _focus={{ bg: theme.hover }}
                                    color={theme.text}
                                    bg={theme.backgroundSecondary}
                                >
                                    <Flex justifyContent='space-between'>
                                        <Text textTransform='capitalize'>{item.label}</Text>
                                        {showKeyboardShortcut && <Kbd>{item.key[0]}</Kbd>}
                                    </Flex>
                                </MenuItemOption>
                            ))}
                        </MenuOptionGroup>
                    </>
                )}
            </MenuList>
        </Menu>
    );
}
