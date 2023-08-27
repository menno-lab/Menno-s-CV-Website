'use client';
import { Language } from '@/i18n/types';
import React from 'react';
import { Box, Ticker, VStack, useTechStackLogos } from 'ui';

export function SocialProof() {
    const logos = useTechStackLogos();
    const logoSize = '28px';
    const duration = 20;
    return (
        <VStack spacing={12} py='8vh'>
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
