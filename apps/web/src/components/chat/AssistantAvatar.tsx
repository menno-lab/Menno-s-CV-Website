import { Avatar, AvatarBadge } from '@chakra-ui/react';
import React from 'react';

const src = 'https://esseemot.sirv.com/Images/square.png';

export function AssistantAvatar() {
    return (
        <Avatar name='Menno Jager' src={src} size='md'>
            <AvatarBadge bg='green' boxSize='14px' borderWidth='2px' />
        </Avatar>
    );
}
