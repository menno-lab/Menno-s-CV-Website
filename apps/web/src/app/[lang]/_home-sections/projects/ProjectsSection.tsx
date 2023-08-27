import React from 'react';
import { useTranslation } from '@/i18n';
import { HomePageSection } from '../HomePageSection';
import { ProjectsGrid } from './ProjectsGrid';
import { ProjectItem } from './types';
import { Language } from '@/i18n/types';

interface ProjectsSectionProps {
    lang: Language;
}

export async function ProjectsSection({ lang }: ProjectsSectionProps) {
    const { t } = await useTranslation(lang, 'common', 'projects');
    const items = t<ProjectItem[]>('items');
    return (
        <HomePageSection title={t('title')} subtitle={t('subtitle')} id='projects'>
            <ProjectsGrid items={items} />
        </HomePageSection>
    );
}
