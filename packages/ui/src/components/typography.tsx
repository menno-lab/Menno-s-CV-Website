import { Text as ChakraText, TextProps, Heading as ChakraHeading, HeadingProps } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

export function Text({ children, ...props }: PropsWithChildren<TextProps>) {
    return <ChakraText {...props}>{children}</ChakraText>;
}

export function Heading({ children, ...props }: PropsWithChildren<HeadingProps>) {
    return <ChakraHeading {...props}>{children}</ChakraHeading>;
}
