import { useTheme } from '../../context/ThemeProvider';
import { COLOR_SCHEME_NAMES } from '../../utils/colorSchemes';
import { ThemeSelectorProps } from './ThemeSelector';
import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Button, Divider, VStack, Text } from '@chakra-ui/react';

export function ThemeSelectorMobile({ themeCopy }: ThemeSelectorProps) {
    const { themeConfig, changeTheme } = useTheme();
    return (
        <Accordion allowMultiple>
            <AccordionItem background='transparent' border='none'>
                <AccordionButton width={'100%'} justifyContent={'center'}>
                    <Text fontWeight={600}>{themeCopy}</Text>
                </AccordionButton>
                <AccordionPanel pb={4}>
                    <VStack>
                        <Divider />
                        {COLOR_SCHEME_NAMES.map((themeName) => (
                            <Button
                                onClick={() => changeTheme({ themeName, mode: themeConfig.mode })}
                                key={themeName}
                                value={themeName}
                                variant='ghost'
                                width='100%'
                            >
                                <Text textTransform='capitalize'>{themeName}</Text>
                            </Button>
                        ))}
                        <Divider />
                        {['dark', 'light'].map((mode) => (
                            <Button
                                onClick={() => changeTheme({ themeName: themeConfig.themeName, mode: mode as ColorMode })}
                                key={mode}
                                value={mode}
                                variant='ghost'
                                width='100%'
                            >
                                <Text textTransform='capitalize'>{mode}</Text>
                            </Button>
                        ))}
                    </VStack>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
}
