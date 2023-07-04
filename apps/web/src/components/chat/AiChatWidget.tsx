import { Box, Text, VStack, Divider, Flex, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { useChat } from 'ai/react';
import React, { useEffect, useRef } from 'react';
import { ArrowForwardIcon, IconButton, useTheme } from 'ui';
import { ChatBubble } from './ChatBubble';
import { ChatLoadingBubble } from './ChatLoadingBubble';

interface ChatMenuProps {
    firstMessage: string;
}

export function AiChatWidget({ firstMessage }: ChatMenuProps) {
    const { theme } = useTheme();
    const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <>
            <VStack pr='10px' spacing={4} py={4} overflow='auto' flexGrow={1}>
                <ChatBubble
                    message={{
                        id: '1',
                        content: firstMessage,
                        role: 'assistant',
                    }}
                />
                {messages.map((message) => (
                    <ChatBubble key={message.id} message={message} />
                ))}
                {isLoading && <ChatLoadingBubble />}
                <div ref={ref} />
            </VStack>
            <Divider />
            <Box width='100%' py={2}>
                <form onSubmit={handleSubmit}>
                    <InputGroup>
                        <Input
                            value={input}
                            onChange={handleInputChange}
                            autoFocus
                            size='lg'
                            placeholder='Enter message'
                            color={theme.text}
                            focusBorderColor={theme.primary}
                            _placeholder={{ color: theme.text, opacity: 0.6 }}
                            zIndex={2}
                        />
                        <InputRightElement height='100%'>
                            <IconButton type='submit' colorScheme='primary' height='100%' aria-label='Submit' icon={<ArrowForwardIcon />} />
                        </InputRightElement>
                    </InputGroup>
                </form>
            </Box>
        </>
    );
}
