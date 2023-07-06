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
    DrawerOverlay,
} from '@chakra-ui/react';
import React from 'react';
import { ChatIcon, CloseIcon, useTheme } from 'ui';
import { ChatTranslations } from './schema';
import { motion } from 'framer-motion';
import { AiChatWidget } from './AiChatWidget';
import { useAiAnalytics } from 'analytics';
import { getRandomItemFromArray } from '../utils/arrayUtils';
import { MobileChatDrawer } from './MobileChatDrawer';
import { PROFILE_PICTURE } from './utils/constants';

interface FloatingActionButtonProps {
    translations: ChatTranslations;
}

export function FloatingActionButton({ translations }: FloatingActionButtonProps) {
    const { theme, themeConfig } = useTheme();
    const { openChatWindow, closeChatWindow } = useAiAnalytics();
    const { title, inputPlaceholder, firstMessageOptions, legalNotice } = translations;
    const { isOpen, onToggle, onClose } = useDisclosure({
        onOpen: () => {
            openChatWindow();
        },
        onClose: () => {
            closeChatWindow();
        },
    });
    const breakPoint = useBreakpoint();
    const isMobile = breakPoint === 'base';
    const firstMessage = getRandomItemFromArray(firstMessageOptions);
    const isDarkMode = themeConfig.mode === 'dark';

    return (
        <Box position='fixed' right={10} bottom={10}>
            <VStack alignItems='flex-end'>
                {isMobile ? (
                    <Drawer placement='right' onClose={onClose} isOpen={isOpen} size='full'>
                        <DrawerOverlay />
                        <MobileChatDrawer translations={translations} firstMessage={firstMessage} />
                    </Drawer>
                ) : (
                    <SlideFade in={isOpen} offsetX='200px'>
                        <Container p={4} color='white' bg={theme.backgroundSecondary} rounded='md' shadow='2xl' width='lg'>
                            <VStack height='60vh'>
                                <HStack>
                                    <Avatar name='Menno Jager' src={PROFILE_PICTURE} size='md'>
                                        <AvatarBadge bg='green' boxSize='14px' borderWidth='2px' />
                                    </Avatar>
                                    <VStack spacing={0}>
                                        <Text width='100%' fontSize='lg' fontWeight='bold'>
                                            {title}
                                        </Text>
                                        <Text fontSize='xs' color={isDarkMode ? 'gray.400' : 'gray.800'}>
                                            {legalNotice}
                                        </Text>
                                    </VStack>
                                </HStack>
                                <Divider />
                                <AiChatWidget firstMessage={firstMessage} inputPlaceholder={inputPlaceholder} />
                            </VStack>
                        </Container>
                    </SlideFade>
                )}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
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
