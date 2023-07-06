'use client';

import React from 'react';
import { NavbarDropdown } from './NavbarDropdown';
import { ColorMode, THEME_NAMES, ThemeName } from 'ui/src/types';
import { useTheme } from 'ui';
import { capitalize } from 'lodash';
import { NavbarDropdownMobile } from './NavbarDropdownMobile';
import { useCustomizationEvents } from 'analytics';

interface ThemeSelectorProps {
    cta: string;
}

const themeItems = [...THEME_NAMES].map((theme) => ({ key: theme, label: capitalize(theme) }));
const modeItems = ['dark', 'light'].map((mode) => ({ key: mode, label: capitalize(mode) }));

export function ThemeSelector({ cta }: ThemeSelectorProps) {
    const {
        themeConfig: { themeName, mode },
        changeTheme,
    } = useTheme();
    const analytics = useCustomizationEvents();

    return (
        <NavbarDropdown
            cta={cta}
            items={themeItems}
            onChange={(value) => {
                const theme = { themeName: value as ThemeName, mode };
                analytics.changeTheme(theme);
                changeTheme(theme);
            }}
            submenu={{
                items: modeItems,
                onChange: (mode) => {
                    const theme = { themeName, mode: mode as ColorMode };
                    analytics.changeTheme(theme);
                    changeTheme(theme);
                },
            }}
        />
    );
}

export function ThemeSelectorMobile({ cta }: ThemeSelectorProps) {
    const {
        themeConfig: { themeName, mode },
        changeTheme,
    } = useTheme();
    const analytics = useCustomizationEvents();
    return (
        <NavbarDropdownMobile
            cta={cta}
            items={themeItems}
            onChange={(value) => {
                const theme = { themeName: value as ThemeName, mode };
                analytics.changeTheme(theme);
                changeTheme(theme);
            }}
            submenu={{
                items: modeItems,
                onChange: (mode) => {
                    const theme = { themeName, mode: mode as ColorMode };
                    analytics.changeTheme(theme);
                    changeTheme(theme);
                },
            }}
        />
    );
}
