import {
    Collapse as ChakraCollapse,
    CollapseProps,
    Drawer as ChakraDrawer,
    DrawerProps,
    DrawerOverlay as ChakraDrawerOverlay,
    DrawerContent as ChakraDrawerContent,
    DrawerContentProps,
    DrawerBody as ChakraDrawerBody,
    DrawerCloseButton as ChakraDrawerCloseButton,
    ModalOverlayProps,
} from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { useTheme } from '../context/ColorModeProvider';

export function Collapse({ children, ...props }: PropsWithChildren<CollapseProps>) {
    return <ChakraCollapse {...props}>{children}</ChakraCollapse>;
}

export function Drawer({ children, ...props }: PropsWithChildren<DrawerProps>) {
    return <ChakraDrawer {...props}>{children}</ChakraDrawer>;
}

export function DrawerOverlay({ children, ...props }: PropsWithChildren<ModalOverlayProps>) {
    return <ChakraDrawerOverlay {...props}>{children}</ChakraDrawerOverlay>;
}

export function DrawerContent({ children, ...props }: PropsWithChildren<DrawerContentProps>) {
    const { theme } = useTheme();
    return (
        <ChakraDrawerContent {...props} bg={theme.background}>
            {children}
        </ChakraDrawerContent>
    );
}

export function DrawerBody({ children, ...props }: PropsWithChildren<{}>) {
    return <ChakraDrawerBody {...props}>{children}</ChakraDrawerBody>;
}

export function DrawerCloseButton({ children, ...props }: PropsWithChildren<{}>) {
    return <ChakraDrawerCloseButton {...props}>{children}</ChakraDrawerCloseButton>;
}
