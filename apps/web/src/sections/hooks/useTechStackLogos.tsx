'use client';

import { useTheme, Redis, Javascript, Vite, Python, Trpc, OpenAi, NodeJs, Docker, TypeScript, Aws, NextJs, MongoDb, React } from 'ui';

export function useTechStackLogos() {
    const { theme } = useTheme();
    const color = theme.secondary;
    const secondaryColor = theme.accent;
    const textColor = theme.text;
    return [
        {
            name: 'Redis',
            logo: <Redis color={color} textColor={textColor} alt='Redis logo' />,
        },
        {
            name: 'Javascript',
            logo: <Javascript color={color} secondaryColor={secondaryColor} alt='Javascript logo' />,
        },
        {
            name: 'Vite',
            logo: <Vite color={color} secondaryColor={secondaryColor} alt='Vite logo' />,
        },
        {
            name: 'Python',
            logo: <Python color={color} secondaryColor={secondaryColor} textColor={textColor} alt='Python logo' />,
        },
        {
            name: 'Trpc',
            logo: <Trpc color={color} alt='Trpc logo' />,
        },
        {
            name: 'OpenAi',
            logo: <OpenAi color={color} alt='OpenAi logo' />,
        },
        {
            name: 'NodeJs',
            logo: <NodeJs color={color} textColor={textColor} alt='NodeJs logo' />,
        },
        {
            name: 'Docker',
            logo: <Docker color={color} alt='Docker logo' />,
        },
        {
            name: 'TypeScript',
            logo: <TypeScript color={color} alt='TypeScript logo' />,
        },
        {
            name: 'AWS',
            logo: <Aws color={color} textColor={textColor} alt='Aws logo' />,
        },
        {
            name: 'Next.js',
            logo: <NextJs color={color} alt='Next.js logo' />,
        },
        {
            name: 'MongoDb',
            logo: <MongoDb color={color} alt='MongoDb logo' />,
        },
        {
            name: 'React',
            logo: <React color={color} alt='React logo' />,
        },
    ];
}
