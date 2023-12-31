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
    useDisclosure,
    VStack,
} from 'ui';
import { useRouter } from 'next/navigation';
import { Language } from '@/i18n/types';
import { LanguageSelector } from '../LanguageSelector';

interface NavbarMobileProps {
    lang: Language;
}

export function NavbarMobile({ lang }: NavbarMobileProps) {
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
                        <VStack align='stretch' justifyContent='center' height='100%' px={4} spacing={6}>
                            <LanguageSelector lang={lang} />
                            <Button
                                colorScheme={'primary'}
                                onClick={() => {
                                    onClose();
                                    router.push('/contact');
                                }}
                            >
                                Contact
                            </Button>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
}
