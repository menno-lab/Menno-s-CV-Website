'use client';

import {
    Avatar,
    AvatarBadge,
    Box,
    SlideFade,
    useDisclosure,
    VStack,
    Container,
    Divider,
    HStack,
    Text,
    useBreakpoint,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
} from '@chakra-ui/react';
import React from 'react';
import { ChatIcon, CloseIcon, useTheme } from 'ui';
import { ChatTranslations } from './schema';
import { getRandomItemFromArray } from '../../utils/arrayUtils';
import { motion } from 'framer-motion';
import { AiChatWidget } from './AiChatWidget';
import { AssistantAvatar } from './AssistantAvatar';

interface ChatMenuProps {
    translations: ChatTranslations;
}

export function ChatMenu({ translations }: ChatMenuProps) {
    const { theme } = useTheme();
    const { isOpen, onToggle, onClose } = useDisclosure();
    const breakPoint = useBreakpoint();
    const isMobile = breakPoint === 'base';
    const firstMessage = getRandomItemFromArray(translations.firstMessageOptions);

    return (
        <Box position='fixed' right={10} bottom={10}>
            <VStack alignItems='flex-end'>
                {isMobile ? (
                    <Drawer placement='right' onClose={onClose} isOpen={isOpen} size='full'>
                        <DrawerOverlay />
                        <DrawerContent color='white' bg={theme.backgroundSecondary}>
                            <DrawerCloseButton />
                            <DrawerBody pt='32px'>
                                <VStack height='95vh'>
                                    <HStack width='100%'>
                                        <AssistantAvatar />
                                        <Text fontSize='lg' fontWeight='bold'>
                                            Chat with Menno
                                        </Text>
                                    </HStack>
                                    <Divider />
                                    <AiChatWidget firstMessage={firstMessage} />
                                </VStack>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                ) : (
                    <SlideFade in={isOpen} offsetX='200px'>
                        <Container p={4} color='white' bg={theme.backgroundSecondary} rounded='md' shadow='2xl' width='lg'>
                            <VStack height='60vh'>
                                <HStack width='100%'>
                                    <AssistantAvatar />
                                    <Text fontSize='lg' fontWeight='bold'>
                                        Chat with Menno
                                    </Text>
                                </HStack>
                                <Divider />
                                <AiChatWidget firstMessage={firstMessage} />
                            </VStack>
                        </Container>
                    </SlideFade>
                )}

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 2 }}
                >
                    <Avatar
                        aria-label='Open chat'
                        bg={theme.accent}
                        icon={
                            isOpen ? (
                                <motion.div
                                    animate={{
                                        rotate: 180,
                                    }}
                                >
                                    <CloseIcon fontSize='lg' textColor='white' mt='-6px' />
                                </motion.div>
                            ) : (
                                <ChatIcon fontSize='2xl' textColor='white' />
                            )
                        }
                        size='lg'
                        boxShadow='2xl'
                        cursor='pointer'
                        onClick={onToggle}
                    >
                        <AvatarBadge bg='green' boxSize='20px' borderWidth='2px' />
                    </Avatar>
                </motion.div>
            </VStack>
        </Box>
    );
}
