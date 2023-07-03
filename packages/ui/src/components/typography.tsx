import {
    Text as ChakraText,
    TextProps,
    Heading as ChakraHeading,
    HeadingProps,
    Link as ChakraLink,
    LinkProps,
    ListItem as ChakraListItem,
    ListItemProps,
} from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { useTheme } from '../context';

export function Text({ children, ...props }: PropsWithChildren<TextProps>) {
    return <ChakraText {...props}>{children}</ChakraText>;
}

export function Heading({ children, ...props }: PropsWithChildren<HeadingProps>) {
    return <ChakraHeading {...props}>{children}</ChakraHeading>;
}

export function Link({ children, ...props }: PropsWithChildren<LinkProps>) {
    return <ChakraLink {...props}>{children}</ChakraLink>;
}

export function ListItem({ children, ...props }: PropsWithChildren<ListItemProps>) {
    const { themeConfig } = useTheme();
    const isDarkTheme = themeConfig.mode === 'dark';
    return (
        <ChakraListItem {...props} color={isDarkTheme ? 'gray.300' : 'gray.800'}>
            {children}
        </ChakraListItem>
    );
}
