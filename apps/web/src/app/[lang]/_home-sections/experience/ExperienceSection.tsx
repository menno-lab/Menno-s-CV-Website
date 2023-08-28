import React from 'react';
import { HomePageSection } from '../HomePageSection';
import { useTranslation } from '@/i18n';
import { ExperienceItem } from './types';
import { ExperienceGrid } from './ExperienceGrid';
import { Language } from '@/i18n/types';

interface ExperienceSectionProps {
    lang: Language;
}

export async function ExperienceSection({ lang }: ExperienceSectionProps) {
    const { t } = await useTranslation(lang, 'common', 'experience');
    const items = t<ExperienceItem[]>('items');

    return (
        <HomePageSection title={t('title')} subtitle={t('subtitle')} id='experience'>
            <ExperienceGrid items={items} />
        </HomePageSection>
    );
}
