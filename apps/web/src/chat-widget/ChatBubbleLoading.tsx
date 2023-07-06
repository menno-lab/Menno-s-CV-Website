import { Box, SkeletonCircle } from '@chakra-ui/react';
import React from 'react';

export function ChatBubbleLoading() {
    return (
        <Box width='100%' p={2} display='flex' gap='10px' opacity={0.6}>
            <SkeletonCircle size='3' />
            <SkeletonCircle size='3' />
            <SkeletonCircle size='3' />
        </Box>
    );
}
