import { useBreakpoint } from '@chakra-ui/react';
import { useParams } from 'next/navigation';
import { useTheme } from 'ui';

export function useDefaultParams() {
    const breakPoint = useBreakpoint();
    const { lang } = useParams();
    const {
        themeConfig: { themeName, mode },
    } = useTheme();

    return { breakPoint, language: lang, theme: `${themeName}:${mode}` };
}
