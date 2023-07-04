'use client';

import {
    Avatar,
    AvatarBadge,
    Box,
    SlideFade,
    useDisclosure,
    Text,
    VStack,
    Container,
    Divider,
    HStack,
    Textarea,
    Input,
    InputGroup,
    InputLeftAddon,
    InputLeftElement,
    InputRightElement,
} from '@chakra-ui/react';
import { useChat } from 'ai/react';
import React from 'react';
import { ArrowForwardIcon, Button, ChatIcon, CheckIcon, IconButton, useTheme } from 'ui';
import { ChatBubble } from './ChatBubble';
import { AI_MOCKS } from './mocks';
import { AutoScrollToBottom } from './AutoScrollToBottom';
import { AssistantAvatar } from './AssistantAvatar';
import { ChatTranslations } from './schema';
import { Message } from 'ai';
import { getRandomItemFromArray } from '../../utils/arrayUtils';
import { ChatLoadingBubble } from './ChatLoadingBubble';

interface ChatMenuProps {
    translations: ChatTranslations;
}

export function ChatMenu({ translations }: ChatMenuProps) {
    const { theme } = useTheme();
    const { isOpen, onToggle } = useDisclosure();
    const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();

    const firstMessage: Message = {
        id: '1',
        content: getRandomItemFromArray(translations.firstMessageOptions),
        role: 'assistant',
    };

    return (
        <Box position='fixed' right={10} bottom={10}>
            <VStack alignItems='flex-end'>
                <SlideFade in={isOpen} offsetY='20px'>
                    <Container p={4} color='white' bg={theme.backgroundSecondary} rounded='md' shadow='2xl' width='lg'>
                        <VStack>
                            <HStack width='100%'>
                                <AssistantAvatar />
                                <Text fontSize='lg' fontWeight='bold'>
                                    Chat with Menno
                                </Text>
                            </HStack>
                            <Divider />
                            <AutoScrollToBottom>
                                <VStack overflow='auto' maxHeight='60vh' pr='10px' spacing={4} py={4}>
                                    <ChatBubble message={firstMessage} />
                                    {messages.map((message) => (
                                        <ChatBubble key={message.id} message={message} />
                                    ))}
                                    {isLoading && <ChatLoadingBubble />}
                                </VStack>
                            </AutoScrollToBottom>
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
                                            <IconButton
                                                type='submit'
                                                colorScheme='primary'
                                                height='100%'
                                                aria-label='Submit'
                                                icon={<ArrowForwardIcon />}
                                            />
                                        </InputRightElement>
                                    </InputGroup>
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
                    <AvatarBadge bg='green' boxSize='20px' borderWidth='2px' />
                </Avatar>
            </VStack>
        </Box>
    );
}
