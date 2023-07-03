import {
    AbsoluteCenter as ChakraAbsoluteCenter,
    AbsoluteCenterProps,
    ContainerProps,
    Card as ChakraCard,
    CardProps,
    useBreakpoint,
} from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import {
    BoxProps,
    Box as ChakraBox,
    Flex as ChakraFlex,
    Container as ChakraContainer,
    VStack as ChakraVStack,
    Circle as ChakraCircle,
    Stack as ChakraStack,
    StackProps,
} from '@chakra-ui/react';
import { useTheme } from '../context/ThemeProvider';
import { SemanticColor } from '../types';

interface CustomBoxProps extends BoxProps {
    bg?: SemanticColor;
}

interface CustomStackProps extends StackProps {
    bg?: SemanticColor;
}

interface CustomContainerProps extends ContainerProps {
    bg?: SemanticColor;
}

export function Box({ children, bg, ...props }: PropsWithChildren<CustomBoxProps>) {
    const { theme } = useTheme();
    return (
        <ChakraBox {...props} backgroundColor={bg ? theme[bg] : undefined}>
            {children}
        </ChakraBox>
    );
}

export function Flex({ children, bg, ...props }: PropsWithChildren<CustomBoxProps>) {
    const { theme } = useTheme();

    return (
        <ChakraFlex {...props} backgroundColor={bg ? theme[bg] : undefined}>
            {children}
        </ChakraFlex>
    );
}

export function Container({ children, bg, ...props }: PropsWithChildren<CustomContainerProps>) {
    const { theme } = useTheme();
    return (
        <ChakraContainer {...props} backgroundColor={bg ? theme[bg] : undefined}>
            {children}
        </ChakraContainer>
    );
}

export function VStack({ children, ...props }: PropsWithChildren<CustomStackProps>) {
    return <ChakraVStack {...props}>{children}</ChakraVStack>;
}

export function Stack({ children, ...props }: PropsWithChildren<CustomStackProps>) {
    return <ChakraStack {...props}>{children}</ChakraStack>;
}

export function AbsoluteCenter({ children, ...props }: PropsWithChildren<AbsoluteCenterProps>) {
    return <ChakraAbsoluteCenter {...props}>{children}</ChakraAbsoluteCenter>;
}

export function Card({ children, ...props }: PropsWithChildren<CardProps>) {
    const { theme } = useTheme();
    return (
        <ChakraCard {...props} bg={theme.backgroundSecondary}>
            {children}
        </ChakraCard>
    );
}
