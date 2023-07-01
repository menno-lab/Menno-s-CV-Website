import React from 'react';
import { useTheme } from '../context';
import { SemanticColor } from '../types';

interface BlobProps {
    size: number | string;
    color: SemanticColor;
}

export function Square1({ size, color }: BlobProps) {
    const { theme } = useTheme();
    const colorValue = theme[color];
    return (
        <svg viewBox='0 0 60 62' fill='none' xmlns='http://www.w3.org/2000/svg' width={size} height={size}>
            <rect x='0.5' y='0.5' width='47' height='47' stroke={colorValue}></rect>
            <rect x='0.5' y='0.5' width='47' height='47' stroke={colorValue} strokeOpacity='0.2'></rect>
            <rect x='-0.5' y='0.5' width='47' height='47' transform='matrix(-1 0 0 1 53 7)' stroke={colorValue}></rect>
            <rect x='-0.5' y='0.5' width='47' height='47' transform='matrix(-1 0 0 1 53 7)' stroke={colorValue} strokeOpacity='0.2'></rect>
            <rect x='12.5' y='14.5' width='47' height='47' stroke={colorValue}></rect>
            <rect x='12.5' y='14.5' width='47' height='47' stroke={colorValue} strokeOpacity='0.2'></rect>
        </svg>
    );
}
