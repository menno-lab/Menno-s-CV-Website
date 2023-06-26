'use client';

import { PropsWithChildren } from 'react';
import { BoxProps, Box as ChakraBox } from '@chakra-ui/react';
import { useTheme } from '../context/ColorModeProvider';

interface CustomBoxProps extends BoxProps {
    bg?: 'primary' | 'secondary' | 'background' | 'accent';
}

export function Box({ children, bg, ...props }: PropsWithChildren<CustomBoxProps>) {
    const { selectedTheme } = useTheme();
    return (
        <ChakraBox {...props} backgroundColor={bg ? selectedTheme[bg] : undefined}>
            {children}
        </ChakraBox>
    );
}
