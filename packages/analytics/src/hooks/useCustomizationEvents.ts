import { ThemeConfig } from 'ui/src/types';
import { useDefaultParams } from './useDefaultParams';
import { sendEvent } from '../utils';

export function useCustomizationEvents() {
    const defaultParams = useDefaultParams();

    function changeLanguage(language: string) {
        sendEvent('language_switched', { ...defaultParams, language });
    }

    function changeTheme({ themeName, mode }: ThemeConfig) {
        const theme = `${themeName}:${mode}`;
        sendEvent('theme_switched', { ...defaultParams, theme });
    }

    return {
        changeLanguage,
        changeTheme,
    };
}
