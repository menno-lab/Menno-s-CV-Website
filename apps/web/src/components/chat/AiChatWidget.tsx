import { Box, VStack, Divider, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { useChat } from 'ai/react';
import React, { useEffect, useRef } from 'react';
import { ArrowForwardIcon, IconButton, useTheme } from 'ui';
import { ChatBubble } from './ChatBubble';
import { ChatBubbleLoading } from './ChatBubbleLoading';
import { useParams } from 'next/navigation';
import { languagesMap } from '../../i18n/settings';
import { Language } from '../../i18n/types';

interface AiChatWidgetProps {
    firstMessage: string;
    inputPlaceholder: string;
}

export function AiChatWidget({ firstMessage, inputPlaceholder }: AiChatWidgetProps) {
    const { theme } = useTheme();
    const { lang } = useParams() as { lang: Language };
    const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
        initialMessages: [
            {
                id: '1',
                content: firstMessage,
                role: 'assistant',
            },
        ],
        body: { lang: languagesMap[lang] },
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
                <div ref={ref} />
            </VStack>
            <Divider />
            <Box width='100%' py={2}>
                <form onSubmit={handleSubmit}>
                    <InputGroup>
                        <Input
                            value={input}
                            onChange={handleInputChange}
                            size='md'
                            placeholder={inputPlaceholder}
                            color={theme.text}
                            focusBorderColor={theme.primary}
                            _placeholder={{ color: theme.text, opacity: 0.6 }}
                            zIndex={4}
                        />
                        <InputRightElement height='100%'>
                            <IconButton
                                type='submit'
                                colorScheme='primary'
                                aria-label='Submit'
                                icon={<ArrowForwardIcon textColor='white' />}
                            />
                        </InputRightElement>
                    </InputGroup>
                </form>
            </Box>
        </>
    );
}
