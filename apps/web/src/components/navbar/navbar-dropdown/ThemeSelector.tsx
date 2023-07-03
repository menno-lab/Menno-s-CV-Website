'use client';

import React from 'react';
import { NavbarDropdown } from './NavbarDropdown';
import { ColorMode, THEME_NAMES, ThemeName } from 'ui/src/types';
import { useTheme } from 'ui';
import { capitalize } from 'lodash';
import { NavbarDropdownMobile } from './NavbarDropdownMobile';

interface ThemeSelectorProps {
    cta: string;
}

const themeItems = [...THEME_NAMES].map((theme) => ({ key: theme, label: capitalize(theme) }));
const modeItems = ['dark', 'light'].map((mode) => ({ key: mode, label: capitalize(mode) }));

export function ThemeSelector({ cta }: ThemeSelectorProps) {
    const { themeConfig, changeTheme } = useTheme();

    return (
        <NavbarDropdown
            cta={cta}
            items={themeItems}
            onChange={(value) => changeTheme({ themeName: value as ThemeName, mode: themeConfig.mode })}
            submenu={{
                items: modeItems,
                onChange: (mode) => changeTheme({ themeName: themeConfig.themeName, mode: mode as ColorMode }),
            }}
        />
    );
}

export function ThemeSelectorMobile({ cta }: ThemeSelectorProps) {
    const { themeConfig, changeTheme } = useTheme();
    return (
        <NavbarDropdownMobile
            cta={cta}
            items={themeItems}
            onChange={(value) => changeTheme({ themeName: value as ThemeName, mode: themeConfig.mode })}
            submenu={{
                items: modeItems,
                onChange: (mode) => changeTheme({ themeName: themeConfig.themeName, mode: mode as ColorMode }),
            }}
        />
    );
}
