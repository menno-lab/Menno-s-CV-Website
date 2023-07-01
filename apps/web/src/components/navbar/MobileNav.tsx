'use client';

import {
    CloseIcon,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
    Flex,
    HamburgerIcon,
    IconButton,
    Text,
    ThemeSelectorMobile,
} from 'ui';
import { useDisclosure } from '@chakra-ui/react';
import { NavItem } from './schema';

interface MobileNavProps {
    navItems: NavItem[];
}

export function MobileNav({ navItems }: MobileNavProps) {
    const { isOpen, onToggle, onClose } = useDisclosure();
    return (
        <>
            <Flex flex={{ base: 1, md: 'auto' }} display={{ base: 'flex', md: 'none' }}>
                <IconButton
                    onClick={onToggle}
                    icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
                    variant={'ghost'}
                    aria-label={'Toggle Navigation'}
                />
            </Flex>
            <Drawer placement={'left'} onClose={onClose} isOpen={isOpen} size='full'>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerBody>
                        <Flex flexDirection={'column'} justifyContent={'center'} height='100%' gap={12}>
                            {navItems.map((navItem, i) => (
                                <Text key={i} fontWeight={600} textAlign={'center'}>
                                    {navItem.label}
                                </Text>
                            ))}
                            <ThemeSelectorMobile themeCopy={'Theme'} />
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
}
