import { Box, Flex, Text, VStack } from 'ui';
import { Message } from 'ai';
import React from 'react';
import { getBubbleStyles } from '../utils/getBubbleStyles';
import { formatDate } from '../utils/formatDate';

interface ChatBubbleProps {
    message: Message;
}

export function ChatBubble({ message }: ChatBubbleProps) {
    const { textAlign, alignItems, ...styles } = getBubbleStyles(message.role === 'assistant');

    return (
        <VStack spacing={2} width='100%'>
            <Flex width='100%' flexDirection='column' alignItems={alignItems}>
                <Box {...styles} py={2} px={4} borderRadius='xl' shadow='md' width='fit-content'>
                    <Text fontSize='sm' color='white' textAlign={textAlign}>
                        {message.content}
                    </Text>
                </Box>
                <Box width='100%'>
                    {message.createdAt && (
                        <Text variant='label' fontSize='xs' textAlign={textAlign}>
                            {formatDate(message.createdAt)}
                        </Text>
                    )}
                </Box>
            </Flex>
        </VStack>
    );
}
