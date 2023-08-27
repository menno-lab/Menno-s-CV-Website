import { useColorModeValue, useToken } from '@chakra-ui/react';
import {
    Aws,
    Css,
    Django,
    Docker,
    Figma,
    Git,
    Html,
    Javascript,
    MongoDb,
    MySql,
    NextJs,
    NodeJs,
    OpenAi,
    Python,
    React,
    Redis,
    Serverless,
    Trpc,
    TypeScript,
    Vite,
} from '../technologies';
import { useColorScheme } from './useColorScheme';

export function useTechStackLogos() {
    const colorScheme = useColorScheme();
    return [
        {
            name: 'AWS',
            logo: <Aws {...colorScheme} alt='Aws logo' />,
        },
        {
            name: 'Css',
            logo: <Css {...colorScheme} alt='Css logo' />,
        },
        {
            name: 'Django',
            logo: <Django {...colorScheme} alt='Django logo' />,
        },
        {
            name: 'Docker',
            logo: <Docker {...colorScheme} alt='Docker logo' />,
        },
        {
            name: 'Figma',
            logo: <Figma {...colorScheme} alt='Figma logo' />,
        },
        {
            name: 'Git',
            logo: <Git {...colorScheme} alt='Git logo' />,
        },
        {
            name: 'Html',
            logo: <Html {...colorScheme} alt='Html logo' />,
        },
        {
            name: 'Javascript',
            logo: <Javascript {...colorScheme} alt='Javascript logo' />,
        },
        {
            name: 'MongoDb',
            logo: <MongoDb {...colorScheme} alt='MongoDb logo' />,
        },
        {
            name: 'MySql',
            logo: <MySql {...colorScheme} alt='MySql logo' />,
        },
        {
            name: 'Next.js',
            logo: <NextJs {...colorScheme} alt='Next.js logo' />,
        },
        {
            name: 'NodeJs',
            logo: <NodeJs {...colorScheme} alt='NodeJs logo' />,
        },
        {
            name: 'OpenAi',
            logo: <OpenAi {...colorScheme} alt='OpenAi logo' />,
        },
        {
            name: 'Python',
            logo: <Python {...colorScheme} alt='Python logo' />,
        },
        {
            name: 'React',
            logo: <React {...colorScheme} alt='React logo' />,
        },
        {
            name: 'Redis',
            logo: <Redis {...colorScheme} alt='Redis logo' />,
        },
        {
            name: 'Serverless',
            logo: <Serverless {...colorScheme} alt='Serverless logo' />,
        },
        {
            name: 'Trpc',
            logo: <Trpc {...colorScheme} alt='Trpc logo' />,
        },
        {
            name: 'TypeScript',
            logo: <TypeScript {...colorScheme} alt='TypeScript logo' />,
        },
        {
            name: 'Vite',
            logo: <Vite {...colorScheme} alt='Vite logo' />,
        },
    ];
}
