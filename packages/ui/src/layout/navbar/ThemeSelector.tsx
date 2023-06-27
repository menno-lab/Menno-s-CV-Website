import { Menu, MenuButton, Button, MenuList, Text, Kbd, MenuOptionGroup, MenuItemOption, Flex, MenuDivider } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useTheme } from '../../context/ColorModeProvider';
import { COLOR_SCHEME_NAMES } from '../../utils/colorSchemes';
import { brightenColor } from '../../utils/brightenColor';

interface ThemeSelectorProps {
    themeCopy: string;
}

export function ThemeSelector({ themeCopy }: ThemeSelectorProps) {
    const { themeConfig, changeTheme, theme } = useTheme();
    const bg = brightenColor(theme.background, 0.1);
    const hover = brightenColor(theme.background, 0.2);

    return (
        <Menu>
            <MenuButton as={Button} variant='link' rightIcon={<ChevronDownIcon />}>
                <Text>{themeCopy}</Text>
            </MenuButton>
            <MenuList bg={bg}>
                <MenuOptionGroup
                    type='radio'
                    value={themeConfig.themeName}
                    onChange={(value) => changeTheme({ themeName: value as string, mode: themeConfig.mode })}
                >
                    {COLOR_SCHEME_NAMES.map((colorScheme) => (
                        <MenuItemOption key={colorScheme} value={colorScheme} bg={bg} _hover={{ bg: hover }}>
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
                        <MenuItemOption key={mode} value={mode} bg={bg} _hover={{ bg: hover }}>
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
