import { Box, ChakraProvider, Flex, Spinner } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';
import { getDefaultTheme } from '../utils/defaultTheme';
import { COLOR_SCHEMES } from '../utils/colorSchemes';

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

export function LoadingScreen() {
    return (
        <ChakraProvider>
            <Flex width='100vw' height='100vh' justifyContent='center' alignItems='center' bg='gray.800'>
                <Spinner size='xl' color='purple.400' />
            </Flex>
        </ChakraProvider>
    );
}
