import React from 'react';
import { HStack, Avatar, AvatarBadge, VStack, Text } from 'ui';
import { PROFILE_PICTURE } from '../utils/constants';

interface ChatHeaderProps {
    title: string;
    legalNotice: string;
}

export function ChatHeader({ title, legalNotice }: ChatHeaderProps) {
    return (
        <HStack alignItems='start' spacing={4}>
            <Avatar name='Menno Jager' src={PROFILE_PICTURE} size='md'>
                <AvatarBadge bg='green' boxSize='14px' borderWidth='2px' />
            </Avatar>
            <VStack spacing={0}>
                <Text width='100%' fontSize='lg' fontWeight='bold'>
                    {title}
                </Text>
                <Text variant='label' fontSize='xs'>
                    {legalNotice}
                </Text>
            </VStack>
        </HStack>
    );
}
