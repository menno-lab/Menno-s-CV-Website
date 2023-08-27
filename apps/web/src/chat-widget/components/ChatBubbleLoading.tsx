import { Box, SkeletonCircle } from 'ui';
import React from 'react';

export function ChatBubbleLoading() {
    return (
        <Box width='100%' p={2} display='flex' gap='8px' opacity={0.6}>
            <SkeletonCircle size='2' />
            <SkeletonCircle size='2' />
            <SkeletonCircle size='2' />
        </Box>
    );
}
