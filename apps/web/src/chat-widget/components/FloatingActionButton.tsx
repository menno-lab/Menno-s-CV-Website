'use client';

import {
    Box,
    useDisclosure,
    VStack,
    Popover,
    PopoverTrigger,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverFooter,
    ArrowForwardIcon,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    Alert,
    AlertDescription,
    AlertIcon,
} from 'ui';
import React, { useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ChatCopies } from '../types';
import { FloatingActionButtonAvatar } from './FloatingActionButtonAvatar';
import { ChatHeader } from './ChatHeader';
import { useChat } from 'ai/react';
import { ChatBubble } from './ChatBubble';
import { ChatBubbleLoading } from './ChatBubbleLoading';
import { Language } from '@/i18n/types';

interface FloatingActionButtonProps {
    copies: ChatCopies;
    firstMessage: string;
}

export function FloatingActionButton({ copies, firstMessage }: FloatingActionButtonProps) {
    const { title, inputPlaceholder, legalNotice } = copies;
    const scrollRef = useRef<HTMLDivElement>(null);
    const initialFocusRef = useRef<HTMLInputElement>(null);
    const { isOpen, onOpen, onToggle, onClose } = useDisclosure();
    const { lang } = useParams() as { lang: Language };
    const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
        initialMessages: [
            {
                id: '1',
                content: firstMessage,
                role: 'assistant',
                createdAt: new Date(),
            },
        ],
        body: { lang },
    });

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }, [messages]);

    return (
        <Popover closeOnBlur={false} placement='top-end' onClose={onClose} onOpen={onOpen} initialFocusRef={initialFocusRef}>
            <PopoverTrigger>
                <Box position='fixed' right={10} bottom={10}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                    >
                        <FloatingActionButtonAvatar isOpen={isOpen} onToggle={onToggle} />
                    </motion.div>
                </Box>
            </PopoverTrigger>
            <PopoverContent minWidth='420px'>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader p={4}>
                    <ChatHeader title={title} legalNotice={legalNotice} />
                </PopoverHeader>
                <PopoverBody>
                    <VStack height={{ base: '80v', md: '50vh' }} spacing={4} py={4} overflowY='auto' pr={4}>
                        {messages.map((message) => (
                            <ChatBubble key={message.id} message={message} />
                        ))}
                        {isLoading && <ChatBubbleLoading />}
                        {error && (
                            <Alert status='error'>
                                <AlertIcon />
                                <AlertDescription>Something went wrong</AlertDescription>
                            </Alert>
                        )}
                        <div ref={scrollRef} />
                    </VStack>
                </PopoverBody>
                <PopoverFooter py={4}>
                    <form onSubmit={handleSubmit}>
                        <InputGroup>
                            <Input
                                value={input}
                                onChange={handleInputChange}
                                ref={initialFocusRef}
                                size='md'
                                variant='unstyled'
                                placeholder={inputPlaceholder}
                            />
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
                </PopoverFooter>
            </PopoverContent>
        </Popover>
    );
}
