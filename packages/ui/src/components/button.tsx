import { PropsWithChildren } from 'react';
import { Button as ChakraButton, ButtonProps, IconButton as ChakraIconButton, IconButtonProps } from '@chakra-ui/react';
import { useTheme } from '../context/ThemeProvider';
import { SemanticColor } from '../types';

interface CustomButtonProps extends ButtonProps {
    variant: SemanticColor;
}

export function Button({ children, variant, ...props }: PropsWithChildren<CustomButtonProps>) {
    const { theme, themeConfig } = useTheme();

    return (
        <ChakraButton {...props} bg={theme[variant]} color={'#FFFFFF'} boxShadow='md'>
            {children}
        </ChakraButton>
    );
}

export function IconButton({ ...props }: IconButtonProps) {
    return <ChakraIconButton {...props} />;
}
