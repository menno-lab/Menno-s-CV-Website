'use client';

import { Box, useColorModeValue } from 'ui';
import { motion } from 'framer-motion';
import { PropsWithChildren, useState, useEffect } from 'react';

export function NavbarVisibilityController({ children }: PropsWithChildren<{}>) {
    const [scrollDirection, setScrollDirection] = useState('up');
    const navbarColor = useColorModeValue('white', 'gray.800');

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

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (
        <motion.div initial={{ opacity: 1 }} animate={{ opacity: scrollDirection === 'down' ? 0 : 1 }} transition={{ duration: 0.4 }}>
            <Box bg={navbarColor} position='fixed' width='100vw' zIndex={2} top={0} borderBottom='1px' borderColor='inherit'>
                {children}
            </Box>
        </motion.div>
    );
}
