'use client';

import {
    useTheme,
    Redis,
    Javascript,
    Vite,
    Python,
    Trpc,
    OpenAi,
    NodeJs,
    Docker,
    TypeScript,
    Aws,
    NextJs,
    MongoDb,
    React,
    Django,
    Html,
    Css,
    Serverless,
    Figma,
    MySql,
    Git,
    Jira,
} from 'ui';

export function useTechStackLogos() {
    const { theme } = useTheme();
    const colorScheme = { color: theme.secondary, secondaryColor: theme.accent, textColor: theme.text };
    return [
        {
            name: 'Redis',
            logo: <Redis {...colorScheme} alt='Redis logo' />,
        },
        {
            name: 'Javascript',
            logo: <Javascript {...colorScheme} alt='Javascript logo' />,
        },
        {
            name: 'Vite',
            logo: <Vite {...colorScheme} alt='Vite logo' />,
        },
        {
            name: 'Python',
            logo: <Python {...colorScheme} alt='Python logo' />,
        },
        {
            name: 'Trpc',
            logo: <Trpc {...colorScheme} alt='Trpc logo' />,
        },
        {
            name: 'OpenAi',
            logo: <OpenAi {...colorScheme} alt='OpenAi logo' />,
        },
        {
            name: 'NodeJs',
            logo: <NodeJs {...colorScheme} alt='NodeJs logo' />,
        },
        {
            name: 'Docker',
            logo: <Docker {...colorScheme} alt='Docker logo' />,
        },
        {
            name: 'TypeScript',
            logo: <TypeScript {...colorScheme} alt='TypeScript logo' />,
        },
        {
            name: 'AWS',
            logo: <Aws {...colorScheme} alt='Aws logo' />,
        },
        {
            name: 'Next.js',
            logo: <NextJs {...colorScheme} alt='Next.js logo' />,
        },
        {
            name: 'MongoDb',
            logo: <MongoDb {...colorScheme} alt='MongoDb logo' />,
        },
        {
            name: 'React',
            logo: <React {...colorScheme} alt='React logo' />,
        },
        {
            name: 'Django',
            logo: <Django {...colorScheme} alt='Django logo' />,
        },
        {
            name: 'Html',
            logo: <Html {...colorScheme} alt='Html logo' />,
        },
        {
            name: 'Css',
            logo: <Css {...colorScheme} alt='Css logo' />,
        },
        {
            name: 'Serverless',
            logo: <Serverless {...colorScheme} alt='Serverless logo' />,
        },
        {
            name: 'Figma',
            logo: <Figma {...colorScheme} alt='Figma logo' />,
        },
        {
            name: 'MySql',
            logo: <MySql {...colorScheme} alt='MySql logo' />,
        },
        {
            name: 'Git',
            logo: <Git {...colorScheme} alt='Git logo' />,
        },
        {
            name: 'Jira',
            logo: <Jira {...colorScheme} alt='Jira logo' />,
        },
    ];
}
