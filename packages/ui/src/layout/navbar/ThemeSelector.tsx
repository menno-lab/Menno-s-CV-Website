import { Menu, MenuButton, Button, MenuList, Text, Kbd, MenuOptionGroup, MenuItemOption, Flex, MenuDivider } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useTheme } from '../../context/ColorModeProvider';
import { COLOR_SCHEME_NAMES } from '../../utils/colorSchemes';
import { makeColorDarker, makeColorBrighter } from '../../utils/modifyColor';

interface ThemeSelectorProps {
    themeCopy: string;
}

export function ThemeSelector({ themeCopy }: ThemeSelectorProps) {
    const { themeConfig, changeTheme, theme } = useTheme();
    const isDarkMode = themeConfig.mode === 'dark';

    const bg = isDarkMode ? makeColorBrighter(theme.background, 0.1) : makeColorDarker(theme.background, 0.1);
    const hover = isDarkMode ? makeColorBrighter(theme.background, 0.2) : makeColorDarker(theme.background, 0.2);

    return (
        <Menu>
            <MenuButton as={Button} variant='link' rightIcon={<ChevronDownIcon />} color={theme.text} _active={{ color: 'gray' }}>
                {themeCopy}
            </MenuButton>
            <MenuList bg={bg} borderColor={hover}>
                <MenuOptionGroup
                    type='radio'
                    value={themeConfig.themeName}
                    onChange={(value) => changeTheme({ themeName: value as string, mode: themeConfig.mode })}
                >
                    {COLOR_SCHEME_NAMES.map((colorScheme) => (
                        <MenuItemOption
                            key={colorScheme}
                            value={colorScheme}
                            bg={bg}
                            _hover={{ bg: hover }}
                            _focus={{ bg: hover }}
                            color={theme.text}
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
                        <MenuItemOption key={mode} value={mode} bg={bg} _hover={{ bg: hover }} _focus={{ bg: hover }} color={theme.text}>
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
