import { Text, HStack, Avatar, AvatarBadge, Divider, DrawerContent, DrawerCloseButton, DrawerBody, VStack } from '@chakra-ui/react';
import React from 'react';
import { AiChatWidget } from './AiChatWidget';
import { useTheme } from 'ui';
import { ChatTranslations } from './schema';
import { PROFILE_PICTURE } from './utils/constants';

interface MobileChatDrawerProps {
    translations: ChatTranslations;
    firstMessage: string;
}

export function MobileChatDrawer({ translations, firstMessage }: MobileChatDrawerProps) {
    const { theme, themeConfig } = useTheme();
    const isDarkMode = themeConfig.mode === 'dark';
    const { title, inputPlaceholder, legalNotice } = translations;

    return (
        <DrawerContent color='white' bg={theme.backgroundSecondary}>
            <DrawerCloseButton />
            <DrawerBody pt='32px' pb='100px'>
                <VStack height='100%' pb='28px'>
                    <HStack>
                        <Avatar name='Menno Jager' src={PROFILE_PICTURE} size='md'>
                            <AvatarBadge bg='green' boxSize='14px' borderWidth='2px' />
                        </Avatar>
                        <VStack spacing={0}>
                            <Text width='100%' fontSize='lg' fontWeight='bold' textAlign='left'>
                                {title}
                            </Text>
                            <Text fontSize='2xs' color={isDarkMode ? 'gray.400' : 'gray.800'}>
                                {legalNotice}
                            </Text>
                        </VStack>
                    </HStack>
                    <Divider />
                    <AiChatWidget firstMessage={firstMessage} inputPlaceholder={inputPlaceholder} />
                </VStack>
            </DrawerBody>
        </DrawerContent>
    );
}
