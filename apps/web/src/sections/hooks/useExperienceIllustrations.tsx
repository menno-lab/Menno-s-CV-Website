'use client';

import { Google, LinkedIn, Supermetrics, Textpanda, useTheme } from 'ui';
import { ExperienceCompany } from '../experience/schema';

export function useExperienceIllustrations(): Record<ExperienceCompany, JSX.Element> {
    const { theme } = useTheme();
    const colorScheme = { color: theme.secondary, secondaryColor: theme.accent };

    return {
        supermetrics: <Supermetrics {...colorScheme} alt='Supermetrics illustration' />,
        textpanda: <Textpanda {...colorScheme} alt='Textpanda illustration' />,
        linkedin: <LinkedIn {...colorScheme} alt='LinkedIn illustration' />,
        google: <Google {...colorScheme} alt='Google illustration' />,
    };
}
