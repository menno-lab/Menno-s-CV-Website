import { Google, LinkedIn, Supermetrics } from '../illustrations/experience';
import { Textpanda } from '../illustrations/projects';
import { useIllustrationColorScheme } from './useIllustrationColorScheme';

export function useExperienceIllustrations(): Record<string, JSX.Element> {
    const colorScheme = useIllustrationColorScheme();
    return {
        supermetrics: <Supermetrics {...colorScheme} alt='Supermetrics illustration' />,
        textpanda: <Textpanda {...colorScheme} alt='Textpanda illustration' />,
        linkedin: <LinkedIn {...colorScheme} alt='LinkedIn illustration' />,
        google: <Google {...colorScheme} alt='Google illustration' />,
    };
}
