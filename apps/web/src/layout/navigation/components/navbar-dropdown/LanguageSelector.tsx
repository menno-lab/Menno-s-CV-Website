'use client';

import React from 'react';
import { NavbarDropdown } from './NavbarDropdown';
import { useRouter } from 'next/navigation';
import { NavbarDropdownMobile } from './NavbarDropdownMobile';
import { useCustomizationEvents } from 'analytics';
import { languagesMap } from '../../../../i18n/settings';

interface LanguageSelectorProps {
    cta: string;
}

const items = Object.keys(languagesMap).map((key) => ({
    key,
    label: languagesMap[key].nativeName,
}));

export function LanguageSelector({ cta }: LanguageSelectorProps) {
    const { push } = useRouter();
    const { changeLanguage } = useCustomizationEvents();

    return (
        <NavbarDropdown
            cta={cta}
            items={items}
            onChange={(value) => {
                changeLanguage(value);
                push('/' + value);
            }}
        />
    );
}

export function LanguageSelectorMobile({ cta }: LanguageSelectorProps) {
    const { push } = useRouter();
    const { changeLanguage } = useCustomizationEvents();

    return (
        <NavbarDropdownMobile
            cta={cta}
            items={items}
            onChange={(value) => {
                changeLanguage(value);
                push('/' + value);
            }}
        />
    );
}
