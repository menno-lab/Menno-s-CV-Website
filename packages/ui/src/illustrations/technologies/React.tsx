import { IllustrationProps } from './types';

export function React({ color, alt }: IllustrationProps) {
    return (
        <svg aria-label={alt} viewBox='-10.5 -9.45 21 18.9' fill='none' xmlns='http://www.w3.org/2000/svg' height='100%'>
            <circle cx='0' cy='0' r='2' fill={color}></circle>
            <g stroke={color} strokeWidth='1' fill='none'>
                <ellipse rx='10' ry='4.5'></ellipse>
                <ellipse rx='10' ry='4.5' transform='rotate(60)'></ellipse>
                <ellipse rx='10' ry='4.5' transform='rotate(120)'></ellipse>
            </g>
        </svg>
    );
}
