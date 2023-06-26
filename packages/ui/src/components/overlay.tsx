import {
    Menu as ChakraMenu,
    MenuProps,
    MenuList as ChakraMenuList,
    MenuListProps,
    MenuItem as ChakraMenuItem,
    MenuItemProps,
} from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

export function Menu({ children, ...props }: PropsWithChildren<MenuProps>) {
    return <ChakraMenu {...props}>{children}</ChakraMenu>;
}

export function MenuList({ children, ...props }: PropsWithChildren<MenuListProps>) {
    return <ChakraMenuList {...props}>{children}</ChakraMenuList>;
}

export function MenuItem({ children, ...props }: PropsWithChildren<MenuItemProps>) {
    return <ChakraMenuItem {...props}>{children}</ChakraMenuItem>;
}
