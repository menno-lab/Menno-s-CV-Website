'use client';

import {
    Button,
    CloseIcon,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
    Flex,
    HamburgerIcon,
    IconButton,
} from 'ui';
import { useDisclosure } from '@chakra-ui/react';
import { LanguageSelectorMobile } from './navbar-dropdown/LanguageSelector';
import { ThemeSelectorMobile } from './navbar-dropdown/ThemeSelector';
import { useRouter } from 'next/navigation';
import { NavbarTranslations } from '../schema';

interface MobileNavProps {
    translations: NavbarTranslations;
}

export function MobileNav({ translations }: MobileNavProps) {
    const { theme, language } = translations;
    const { isOpen, onToggle, onClose } = useDisclosure();
    const router = useRouter();

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
                        <Flex flexDirection={'column'} justifyContent={'center'} height='100%' gap={14}>
                            <ThemeSelectorMobile cta={theme} />
                            <LanguageSelectorMobile cta={language} />
                            <Button
                                colorScheme={'primary'}
                                onClick={() => {
                                    onClose();
                                    router.push('/contact');
                                }}
                            >
                                Contact
                            </Button>
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
}
