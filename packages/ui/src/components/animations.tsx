import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { PropsWithChildren, useEffect, useState } from 'react';

interface TickerProps {
    direction: 'left' | 'right';
}

export function Ticker({ direction, children }: PropsWithChildren<TickerProps>) {
    const scrollAnimation = {
        x: direction === 'left' ? ['100%', '-100%'] : ['-100%', '100%'],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 24,
                ease: 'linear',
            },
        },
    };
    return (
        <Box overflow='hidden' width='100%'>
            <motion.div style={{ display: 'flex' }} animate={scrollAnimation}>
                {children}
            </motion.div>
        </Box>
    );
}
