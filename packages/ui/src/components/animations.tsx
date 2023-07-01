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

export function NavbarController({ children }: PropsWithChildren<{}>) {
    const [scrollDirection, setScrollDirection] = useState('up');

    useEffect(() => {
        const threshold = 0;
        let lastScrollY = window.scrollY;
        let ticking = false;

        const updateScrollDirection = () => {
            const scrollY = window.scrollY;
            if (Math.abs(scrollY - lastScrollY) < threshold) {
                ticking = false;
                return;
            }
            setScrollDirection(scrollY > lastScrollY ? 'down' : 'up');
            lastScrollY = scrollY > 0 ? scrollY : 0;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollDirection);
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <motion.div initial={{ opacity: 1 }} animate={{ opacity: scrollDirection === 'down' ? 0 : 1 }} transition={{ duration: 0.4 }}>
            {children}
        </motion.div>
    );
}
