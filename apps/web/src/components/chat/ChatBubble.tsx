import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import { Message } from 'ai';
import React from 'react';
import { useTheme } from 'ui';
import { isToday, format } from 'date-fns';

function formatDate(date: Date) {
    if (isToday(date)) {
        return format(date, 'HH:mm');
    }
    return format(date, 'd MMMM - HH:mm');
}

interface ChatBubbleProps {
    message: Message;
}

export function ChatBubble({ message }: ChatBubbleProps) {
    const { theme, themeConfig } = useTheme();
    const isDarkMode = themeConfig.mode === 'dark';
    const isAiMessage = message.role === 'assistant';

    const borderTopRightRadius = isAiMessage ? undefined : '0';
    const borderTopLeftRadius = isAiMessage ? '0' : undefined;
    const bg = isAiMessage ? theme.accent : theme.primary;
    const textAlign = isAiMessage ? 'left' : 'right';
    const alignItems = isAiMessage ? 'flex-start' : 'flex-end';

    return (
        <VStack spacing={2} width='100%'>
            <Flex width='100%' flexDirection='column' alignItems={alignItems}>
                <Box
                    bg={bg}
                    py={2}
                    px={4}
                    borderRadius='xl'
                    borderTopRightRadius={borderTopRightRadius}
                    borderTopLeftRadius={borderTopLeftRadius}
                    shadow='md'
                    width='fit-content'
                >
                    <Text fontSize='sm' textAlign={textAlign}>
                        {message.content}
                    </Text>
                </Box>
                <Box width='100%'>
                    {message.createdAt && (
                        <Text fontSize='xs' textAlign={textAlign} color={isDarkMode ? 'gray.400' : 'gray.600'}>
                            {formatDate(message.createdAt)}
                        </Text>
                    )}
                </Box>
            </Flex>
        </VStack>
    );
}
