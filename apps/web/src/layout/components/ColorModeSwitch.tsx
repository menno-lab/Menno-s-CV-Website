'use client';
import React from 'react';
import { IconButton, MoonIcon, SunIcon, useColorMode } from 'ui';

export function ColorModeSwitch() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <IconButton
            variant='ghost'
            aria-label='Switch color theme'
            icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode}
        />
    );
}
