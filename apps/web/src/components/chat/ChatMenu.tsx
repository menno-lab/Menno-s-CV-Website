'use client';

import { Avatar, AvatarBadge, Box, SlideFade, useDisclosure, Text, VStack, Container, Divider } from '@chakra-ui/react';
import { useChat } from 'ai/react';
import React from 'react';
import { ChatIcon, useTheme } from 'ui';

const mocks = [
    { id: 1, role: 'user', content: 'Hello' },
    { id: 2, role: 'ai', content: 'Hi' },
];

export function ChatMenu() {
    const { theme } = useTheme();
    const { isOpen, onToggle } = useDisclosure();
    const { messages, input, handleInputChange, handleSubmit } = useChat();

    console.log(messages);

    return (
        <Box position='fixed' right={10} bottom={10}>
            <VStack alignItems='flex-end'>
                <SlideFade in={isOpen} offsetY='20px'>
                    <Container p={4} color='white' bg={theme.secondary} rounded='md' shadow='2xl' width='lg'>
                        <VStack>
                            <VStack>
                                {mocks.map((m) => (
                                    <div key={m.id}>
                                        {m.role === 'user' ? 'User: ' : 'AI: '}
                                        {m.content}
                                    </div>
                                ))}
                            </VStack>
                            <Divider />
                            <Box>
                                <form onSubmit={handleSubmit}>
                                    <label>
                                        Say something...
                                        <input value={input} onChange={handleInputChange} />
                                    </label>
                                    <button type='submit'>Send</button>
                                </form>
                            </Box>
                        </VStack>
                    </Container>
                </SlideFade>
                <Avatar
                    aria-label='Open chat'
                    bg={theme.accent}
                    icon={<ChatIcon fontSize='2xl' textColor='white' />}
                    size='lg'
                    boxShadow='2xl'
                    cursor='pointer'
                    onClick={onToggle}
                >
                    <AvatarBadge bg='green.500' boxSize='20px' borderWidth='3px' />
                </Avatar>
            </VStack>
        </Box>
    );
}
