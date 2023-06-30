import { Menu, MenuButton, Button, MenuList, Text, Kbd, MenuOptionGroup, MenuItemOption, Flex, MenuDivider } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useTheme } from '../../context/ThemeProvider';
import { ColorMode, THEME_NAMES, ThemeName } from '../../types';

export interface ThemeSelectorProps {
    themeCopy: string;
}

export function ThemeSelector({ themeCopy }: ThemeSelectorProps) {
    const { themeConfig, changeTheme, theme } = useTheme();

    return (
        <Menu>
            <MenuButton as={Button} variant='link' rightIcon={<ChevronDownIcon />} color={theme.text} _active={{ color: 'gray' }}>
                <Text>{themeCopy}</Text>
            </MenuButton>
            <MenuList bg={theme.backgroundSecondary} borderColor={theme.hover}>
                <MenuOptionGroup
                    type='radio'
                    value={themeConfig.themeName}
                    onChange={(value) => changeTheme({ themeName: value as ThemeName, mode: themeConfig.mode })}
                >
                    {THEME_NAMES.map((colorScheme) => (
                        <MenuItemOption
                            key={colorScheme}
                            value={colorScheme}
                            _hover={{ bg: theme.hover }}
                            _focus={{ bg: theme.hover }}
                            color={theme.text}
                            bg={theme.backgroundSecondary}
                        >
                            <Flex justifyContent='space-between'>
                                <Text textTransform='capitalize'>{colorScheme}</Text>
                                <Kbd>{colorScheme[0]}</Kbd>
                            </Flex>
                        </MenuItemOption>
                    ))}
                </MenuOptionGroup>
                <MenuDivider />
                <MenuOptionGroup
                    type='radio'
                    value={themeConfig.mode}
                    onChange={(mode) => changeTheme({ themeName: themeConfig.themeName, mode: mode as ColorMode })}
                >
                    {['dark', 'light'].map((mode) => (
                        <MenuItemOption
                            key={mode}
                            value={mode}
                            _hover={{ bg: theme.hover }}
                            _focus={{ bg: theme.hover }}
                            color={theme.text}
                            bg={theme.backgroundSecondary}
                        >
                            <Flex justifyContent='space-between'>
                                <Text textTransform='capitalize'>{mode}</Text>
                                <Kbd>{mode[0]}</Kbd>
                            </Flex>
                        </MenuItemOption>
                    ))}
                </MenuOptionGroup>
            </MenuList>
        </Menu>
    );
}
