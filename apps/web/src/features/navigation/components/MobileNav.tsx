'use client';

import { CloseIcon, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Flex, HamburgerIcon, IconButton, Text } from 'ui';
import { Button, useDisclosure } from '@chakra-ui/react';
import { NavbarTranslations } from './schema';
import { LanguageSelectorMobile } from './navbar-dropdown/LanguageSelector';
import { ThemeSelectorMobile } from './navbar-dropdown/ThemeSelector';
import { useNavigation } from '../hooks/useNavigation';

interface MobileNavProps {
    translations: NavbarTranslations;
}

export function MobileNav({ translations }: MobileNavProps) {
    const { theme, language, navItems } = translations;
    const { isOpen, onToggle, onClose } = useDisclosure();
    const { pathWithoutLang } = useNavigation();

    console.log(pathWithoutLang);

    function handleNavItemClick(href: string) {
        console.log('handleNavItemClick', href);

        // onClose();
    }

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
                            {navItems.map(({ label, href }, i) => (
                                <Button
                                    key={i}
                                    onClick={() => handleNavItemClick(href)}
                                    variant='unstyled'
                                    fontWeight={600}
                                    textAlign={'center'}
                                >
                                    {label}
                                </Button>
                            ))}
                            <ThemeSelectorMobile cta={theme} />
                            <LanguageSelectorMobile cta={language} />
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
}
