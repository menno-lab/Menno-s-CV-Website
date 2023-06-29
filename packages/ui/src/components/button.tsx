import { PropsWithChildren } from 'react';
import { Button as ChakraButton, ButtonProps, IconButton as ChakraIconButton, IconButtonProps } from '@chakra-ui/react';
import { useTheme } from '../context/ThemeProvider';
import { makeColorBrighter, makeColorDarker } from '../utils/modifyColor';

interface CustomButtonProps extends ButtonProps {
    variant: SemanticColor;
}

export function Button({ children, variant, ...props }: PropsWithChildren<CustomButtonProps>) {
    const { theme, themeConfig } = useTheme();
    const isDarkMode = themeConfig.mode === 'dark';
    const bg = isDarkMode ? makeColorBrighter(theme[variant], 0.1) : makeColorDarker(theme[variant], 0.1);
    const hover = isDarkMode ? makeColorBrighter(theme[variant], 0.2) : makeColorDarker(theme[variant], 0.2);

    return (
        <ChakraButton {...props} bg={bg} _hover={{ bg: hover }} color={'#FFFFFF'} boxShadow='md'>
            {children}
        </ChakraButton>
    );
}

export function IconButton({ children, ...props }: PropsWithChildren<IconButtonProps>) {
    return <ChakraIconButton {...props}>{children}</ChakraIconButton>;
}
