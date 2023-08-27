import React from 'react';
import { HomePageSection } from '../HomePageSection';
import { useTranslation } from '@/i18n';
import { ExperienceItem } from './types';
import { ExperienceGrid } from './ExperienceGrid';

export async function ExperienceSection() {
    const { t } = await useTranslation('common', 'experience');
    const items = t<ExperienceItem[]>('items');

    return (
        <HomePageSection title={t('title')} subtitle={t('subtitle')} id='experience'>
            <ExperienceGrid items={items} />
        </HomePageSection>
    );
}
