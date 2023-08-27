import React from 'react';
import { useTranslation } from '@/i18n';
import { HomePageSection } from '../HomePageSection';
import { ProjectsGrid } from './ProjectsGrid';
import { ProjectItem } from './types';

export async function ProjectsSection() {
    const { t } = await useTranslation('common', 'projects');
    const items = t<ProjectItem[]>('items');
    return (
        <HomePageSection title={t('title')} subtitle={t('subtitle')} hash='#projects'>
            <ProjectsGrid items={items} />
        </HomePageSection>
    );
}
