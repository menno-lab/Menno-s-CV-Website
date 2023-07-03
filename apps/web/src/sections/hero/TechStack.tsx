'use client';

import React from 'react';
import { useTechStackLogos } from '../hooks/useTechStackLogos';
import { Ticker, VStack, Box } from 'ui';

function splitArrayInHalf(arr: any[]) {
    const midIndex = Math.ceil(arr.length / 2);
    const firstHalf = arr.slice(0, midIndex);
    const secondHalf = arr.slice(midIndex);
    return [firstHalf, secondHalf];
}

export function TechStack() {
    const logos = useTechStackLogos();
    const [firstHalf, secondHalf] = splitArrayInHalf(logos.sort((a, b) => a.name.localeCompare(b.name)));

    const logoSize = '28px';
    const duration = 18;

    return (
        <VStack spacing={12}>
            <Ticker direction='left' duration={duration}>
                {firstHalf.map(({ logo }, index) => (
                    <Box key={index} height={logoSize} px={6}>
                        {logo}
                    </Box>
                ))}
            </Ticker>
            <Ticker direction='right' duration={duration}>
                {secondHalf.map(({ logo }, index) => (
                    <Box key={index} height={logoSize} px={6}>
                        {logo}
                    </Box>
                ))}
            </Ticker>
        </VStack>
    );
}
