import { CatAstronaut, Chrome, Hubspot, Slack, Textpanda } from '../illustrations/projects';
import { useIllustrationColorScheme } from './useIllustrationColorScheme';

export function useProjectIllustrations(): Record<string, JSX.Element> {
    const colorScheme = useIllustrationColorScheme();
    return {
        textpanda: <Textpanda {...colorScheme} alt='Textpanda illustration' />,
        tp_chrome: <Chrome {...colorScheme} alt='Chrome illustration' />,
        tp_slack: <Slack {...colorScheme} alt='Slack illustration' />,
        tp_hubspot: <Hubspot {...colorScheme} alt='Hubspot illustration' />,
        infinitale: <CatAstronaut {...colorScheme} alt='Infinitale illustration' />,
    };
}
