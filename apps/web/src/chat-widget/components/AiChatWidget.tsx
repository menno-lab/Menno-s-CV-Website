import { Box, VStack, Divider, Input, InputGroup, InputRightElement, Alert, AlertIcon, AlertDescription } from 'ui';
import { useChat } from 'ai/react';
import React, { useEffect, useRef } from 'react';
import { ArrowForwardIcon, IconButton } from 'ui';
import { ChatBubble } from './ChatBubble';
import { ChatBubbleLoading } from './ChatBubbleLoading';

interface AiChatWidgetProps {
    firstMessage: string;
    inputPlaceholder: string;
}

export function AiChatWidget({ firstMessage, inputPlaceholder }: AiChatWidgetProps) {
    const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
        initialMessages: [
            {
                id: '1',
                content: firstMessage,
                role: 'assistant',
            },
        ],
    });

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <>
            <VStack pr='10px' spacing={4} py={4} overflow='auto' flexGrow={1}>
                {messages.map((message) => (
                    <ChatBubble key={message.id} message={message} />
                ))}
                {isLoading && <ChatBubbleLoading />}
                {error && (
                    <Alert status='error'>
                        <AlertIcon />
                        <AlertDescription color='black'>Your Chakra experience may be degraded.</AlertDescription>
                    </Alert>
                )}
                <div ref={ref} />
            </VStack>
            <Divider />
            <Box width='100%' py={2}>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit(e);
                    }}
                >
                    <InputGroup>
                        <Input value={input} onChange={handleInputChange} size='md' placeholder={inputPlaceholder} />
                        <InputRightElement height='100%'>
                            <IconButton
                                type='submit'
                                colorScheme='primary'
                                aria-label='Submit'
                                icon={<ArrowForwardIcon textColor='white' />}
                                borderWidth='1px'
                            />
                        </InputRightElement>
                    </InputGroup>
                </form>
            </Box>
        </>
    );
}
