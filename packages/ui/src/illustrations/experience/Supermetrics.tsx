import React from 'react';
import { IllustrationProps } from '../technologies/types';

export function Supermetrics({ color, alt }: IllustrationProps) {
    return (
        <svg aria-label={alt} version='1.2' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 45 45' width='100%' height='100%'>
            <g id='Layer'>
                <path
                    id='Layer'
                    style={{ fill: color }}
                    d='m0 22c0-12.2 9.8-22 22-22h0.9c12.2 0 22 9.8 22 22v0.9c0 12.2-9.8 22-22 22h-0.9c-12.2 0-22-9.8-22-22z'
                />
                <path
                    id='Layer'
                    style={{ fill: 'white' }}
                    d='m12 10.2h11.8v6.3h-11.8zm0 18.2h17.7v6.3h-17.7zm22.4-2.8h-22.4v-6.3h22.4q0.2 0 0.4 0 0.1 0.1 0.3 0.2 0.2 0.2 0.3 0.3 0 0.2 0.1 0.4 0 0.1 0 0.2 0 0 0 0.1 0 0.1 0 0.2 0 0.1 0 0.2h-0.8q0-0.1 0-0.1 0-0.1 0-0.1 0-0.1 0-0.1 0-0.1 0-0.1c-0.1-0.3-0.2-0.4-0.4-0.4q-0.3 0-0.3 0.6c0 0.3 0 0.4 0.6 1.3l0.4 0.6q0.1 0.2 0.2 0.4 0.1 0.2 0.2 0.4 0.1 0.2 0.2 0.5 0 0.2 0 0.4 0 0.3 0 0.5-0.1 0.3-0.3 0.5-0.2 0.1-0.4 0.2-0.3 0.1-0.5 0.1z'
                />
            </g>
        </svg>
    );
}
