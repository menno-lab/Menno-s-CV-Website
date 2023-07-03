import React from 'react';
import { IllustrationProps } from './types';

export function Figma({ color, secondaryColor, alt }: IllustrationProps) {
    return (
        <svg aria-label={alt} height='100%' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 38 57'>
            <path fill={secondaryColor} d='M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z'></path>
            <path fill={secondaryColor} d='M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z'></path>
            <path fill={color} d='M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z'></path>
            <path fill={color} d='M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z'></path>
            <path fill={color} d='M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z'></path>
        </svg>
    );
}
