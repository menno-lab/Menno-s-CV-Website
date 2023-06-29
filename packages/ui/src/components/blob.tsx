import React from 'react';

interface BlobProps {
    size: number | string;
    color: string;
}

export function Square1({ size, color }: BlobProps) {
    return (
        <svg viewBox='0 0 60 62' fill='none' xmlns='http://www.w3.org/2000/svg' width={size} height={size}>
            <rect x='0.5' y='0.5' width='47' height='47' stroke={color}></rect>
            <rect x='0.5' y='0.5' width='47' height='47' stroke={color} strokeOpacity='0.2'></rect>
            <rect x='-0.5' y='0.5' width='47' height='47' transform='matrix(-1 0 0 1 53 7)' stroke={color}></rect>
            <rect x='-0.5' y='0.5' width='47' height='47' transform='matrix(-1 0 0 1 53 7)' stroke={color} strokeOpacity='0.2'></rect>
            <rect x='12.5' y='14.5' width='47' height='47' stroke={color}></rect>
            <rect x='12.5' y='14.5' width='47' height='47' stroke={color} strokeOpacity='0.2'></rect>
        </svg>
    );
}
