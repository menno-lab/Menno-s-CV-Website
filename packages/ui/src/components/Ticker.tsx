import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

interface TickerProps {
    direction: 'left' | 'right';
    duration: number;
}

export function Ticker({ direction, duration, children }: PropsWithChildren<TickerProps>) {
    const scrollAnimation = {
        x: direction === 'left' ? ['100%', '-100%'] : ['-100%', '100%'],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration,
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
