import { Text as ChakraText, TextProps, Heading as ChakraHeading, HeadingProps , Link as ChakraLink, LinkProps} from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

export function Text({ children, ...props }: PropsWithChildren<TextProps>) {
    return <ChakraText {...props}>{children}</ChakraText>;
}

export function Heading({ children, ...props }: PropsWithChildren<HeadingProps>) {
    return <ChakraHeading {...props}>{children}</ChakraHeading>;
}

export function Link({ children, ...props }: PropsWithChildren<LinkProps>) {
    return <ChakraLink {...props}>{children}</ChakraLink>;
}
