'use client';

import { CatAstronaut, Dragon, Panda, useTheme } from 'ui';
import { ProjectKey } from '../projects/schema';

export function useProjectIllustrations(): Record<ProjectKey, JSX.Element> {
    const { theme } = useTheme();
    const color = theme.accent;
    return {
        textpanda: <Panda color={color} alt='Textpanda illustration' />,
        infinitale: <CatAstronaut color={color} alt='Infinitale illustration' />,
        storyscape: <Dragon color={color} alt='Storyscape illustration' />,
    };
}
