import { useTheme } from '../context/ThemeProvider';
import { Aws } from '../illustrations/technologies/Aws';
import { Docker } from '../illustrations/technologies/Docker';
import { Javascript } from '../illustrations/technologies/Javascript';
import { MongoDb } from '../illustrations/technologies/MongoDb';
import { NextJs } from '../illustrations/technologies/NextJs';
import { NodeJs } from '../illustrations/technologies/NodeJs';
import { OpenAi } from '../illustrations/technologies/OpenAi';
import { Python } from '../illustrations/technologies/Python';
import { React } from '../illustrations/technologies/React';
import { Redis } from '../illustrations/technologies/Redis';
import { Trpc } from '../illustrations/technologies/Trpc';
import { TypeScript } from '../illustrations/technologies/TypeScript';
import { Vite } from '../illustrations/technologies/Vite';

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
