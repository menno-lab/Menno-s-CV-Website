import { Text, HStack, Avatar, AvatarBadge, Divider, DrawerContent, DrawerCloseButton, DrawerBody, VStack } from 'ui';
import React from 'react';
import { AiChatWidget } from './AiChatWidget';
import { ChatCopies } from '../types';
import { PROFILE_PICTURE } from '../utils/constants';

interface MobileChatDrawerProps {
    copies: ChatCopies;
    firstMessage: string;
}

export function MobileChatDrawer({ copies, firstMessage }: MobileChatDrawerProps) {
    const { title, inputPlaceholder, legalNotice } = copies;

    return (
        <DrawerContent color='white'>
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
                            <Text fontSize='2xs'>{legalNotice}</Text>
                        </VStack>
                    </HStack>
                    <Divider />
                    <AiChatWidget firstMessage={firstMessage} inputPlaceholder={inputPlaceholder} />
                </VStack>
            </DrawerBody>
        </DrawerContent>
    );
}
