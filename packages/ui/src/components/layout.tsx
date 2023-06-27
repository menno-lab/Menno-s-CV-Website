import { PropsWithChildren } from 'react';
import {
    BoxProps,
    Box as ChakraBox,
    Flex as ChakraFlex,
    Container as ChakraContainer,
    VStack as ChakraVStack,
    StackProps,
} from '@chakra-ui/react';
import { useTheme } from '../context/ColorModeProvider';

interface CustomLayoutProps extends BoxProps {
    bg?: SemanticColor;
}

export function Box({ children, bg, ...props }: PropsWithChildren<CustomLayoutProps>) {
    const { theme } = useTheme();
    return (
        <ChakraBox {...props} backgroundColor={bg ? theme[bg] : undefined}>
            {children}
        </ChakraBox>
    );
}

export function Flex({ children, bg, ...props }: PropsWithChildren<CustomLayoutProps>) {
    const { theme } = useTheme();
    return (
        <ChakraFlex {...props} backgroundColor={bg ? theme[bg] : undefined}>
            {children}
        </ChakraFlex>
    );
}

export function Container({ children, bg, ...props }: PropsWithChildren<CustomLayoutProps>) {
    const { theme } = useTheme();
    return (
        <ChakraContainer {...props} backgroundColor={bg ? theme[bg] : undefined}>
            {children}
        </ChakraContainer>
    );
}

export function VStack({ children, ...props }: PropsWithChildren<StackProps>) {
    return <ChakraVStack {...props}>{children}</ChakraVStack>;
}
