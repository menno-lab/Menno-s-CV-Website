import { Menu, MenuButton, Button, MenuList, MenuItem, Text, Kbd, MenuOptionGroup, MenuItemOption, Flex } from '@chakra-ui/react';
import { useTheme } from '../context/ColorModeProvider';
import { COLOR_SCHEME_NAMES } from '../utils/colorSchemes';
import { ChevronDownIcon } from '@chakra-ui/icons';

export function NavButtonGroup() {
    const { theme, themeConfig, changeTheme } = useTheme();
    console.log(theme);

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Actions
            </MenuButton>
            <MenuList>
                <MenuOptionGroup
                    type='radio'
                    value={themeConfig.themeName}
                    onChange={(value) => changeTheme({ themeName: value as string, mode: 'light' })}
                >
                    {COLOR_SCHEME_NAMES.map((colorScheme) => (
                        <MenuItemOption key={colorScheme} value={colorScheme}>
                            <Flex justifyContent='space-between'>
                                <Text textTransform='capitalize'>{colorScheme}</Text>
                                <Kbd>{colorScheme[0]}</Kbd>
                            </Flex>
                        </MenuItemOption>
                    ))}
                </MenuOptionGroup>
            </MenuList>
        </Menu>
    );
}
