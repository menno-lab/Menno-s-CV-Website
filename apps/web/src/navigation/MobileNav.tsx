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
} from 'ui';
import { useRouter } from 'next/navigation';

export function MobileNav() {
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
