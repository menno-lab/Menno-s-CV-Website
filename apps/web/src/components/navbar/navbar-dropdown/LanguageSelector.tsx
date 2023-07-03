'use client';

import React from 'react';
import { NavbarDropdown } from './NavbarDropdown';
import { useRouter } from 'next/navigation';
import { NavbarDropdownMobile } from './NavbarDropdownMobile';

interface LanguageSelectorProps {
    cta: string;
}

const items = [
    { key: 'en', label: 'English' },
    { key: 'nl', label: 'Nederlands' },
    { key: 'vn', label: 'Tiếng Việt' },
];

export function LanguageSelector({ cta }: LanguageSelectorProps) {
    const { push } = useRouter();

    return <NavbarDropdown cta={cta} items={items} onChange={(value) => push('/' + value)} />;
}

export function LanguageSelectorMobile({ cta }: LanguageSelectorProps) {
    const { push } = useRouter();
    return <NavbarDropdownMobile cta={cta} items={items} onChange={(value) => push('/' + value)} />;
}
