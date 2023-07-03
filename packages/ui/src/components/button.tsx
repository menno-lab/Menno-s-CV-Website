import { PropsWithChildren } from 'react';
import { Button as ChakraButton, ButtonProps, IconButton as ChakraIconButton, IconButtonProps } from '@chakra-ui/react';
import { useTheme } from '../context/ThemeProvider';
import { SemanticColor } from '../types';

interface CustomButtonProps extends ButtonProps {
    colorScheme: SemanticColor;
}

export function Button({ children, variant, colorScheme, ...props }: PropsWithChildren<CustomButtonProps>) {
    const { theme } = useTheme();
    const color = theme[colorScheme];
    return (
        <ChakraButton {...props} color={'#FFFFFF'} boxShadow='md' bg={color} _hover={{ opacity: 0.8 }}>
            {children}
        </ChakraButton>
    );
}

export function IconButton({ ...props }: IconButtonProps) {
    return <ChakraIconButton {...props} _hover={{ opacity: 0.8 }} />;
}
