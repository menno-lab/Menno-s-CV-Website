'use client';
import { Language } from '@/i18n/types';
import { languagesMap } from '@/i18n/utils/constants';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Button, ChevronDownIcon, Menu, MenuButton, MenuItem, MenuList } from 'ui';

interface LanguageSelectorProps {
    lang: Language;
}

export function LanguageSelector({ lang }: LanguageSelectorProps) {
    const { push } = useRouter();
    return (
        <Menu size='sm'>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                {lang.toUpperCase()}
            </MenuButton>
            <MenuList>
                {Object.entries(languagesMap)
                    .sort(([keyA, valueA], [keyB, valueB]) => valueA.nativeName.localeCompare(valueB.nativeName))
                    .map(([key, value]) => (
                        <MenuItem
                            key={key}
                            value={key}
                            onClick={() => {
                                push('/' + key);
                            }}
                        >
                            {value.nativeName}
                        </MenuItem>
                    ))}
            </MenuList>
        </Menu>
    );
}
