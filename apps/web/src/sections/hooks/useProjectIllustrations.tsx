'use client';

import { CatAstronaut, Chrome, Hubspot, Slack, Textpanda, useTheme } from 'ui';
import { ProjectKey } from '../projects/schema';

export function useProjectIllustrations(): Record<ProjectKey, JSX.Element> {
    const { theme } = useTheme();
    const colorScheme = { color: theme.accent, secondaryColor: theme.secondary };

    return {
        textpanda: <Textpanda {...colorScheme} alt='Textpanda illustration' />,
        tp_chrome: <Chrome {...colorScheme} alt='Chrome illustration' />,
        tp_slack: <Slack {...colorScheme} alt='Slack illustration' />,
        tp_hubspot: <Hubspot {...colorScheme} alt='Hubspot illustration' />,
        infinitale: <CatAstronaut {...colorScheme} alt='Infinitale illustration' />,
    };
}
