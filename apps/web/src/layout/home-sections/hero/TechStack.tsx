'use client';

import React from 'react';
import { useTechStackLogos } from '../hooks/useTechStackLogos';
import { Ticker, VStack, Box } from 'ui';

export function TechStack() {
    const logos = useTechStackLogos();

    const logoSize = '28px';
    const duration = 20;

    return (
        <VStack spacing={12}>
            <Ticker direction='left' duration={duration}>
                {logos.map(({ logo }, index) => (
                    <Box key={index} height={logoSize} px={6}>
                        {logo}
                    </Box>
                ))}
            </Ticker>
            <Ticker direction='right' duration={duration}>
                {logos.reverse().map(({ logo }, index) => (
                    <Box key={index} height={logoSize} px={6}>
                        {logo}
                    </Box>
                ))}
            </Ticker>
        </VStack>
    );
}
