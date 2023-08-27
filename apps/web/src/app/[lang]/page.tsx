import React from 'react';
import { Hero } from './_home-sections/hero/Hero';
import { Text } from 'ui';
import { SocialProof } from './_home-sections/social-proof/SocialProof';
import { useTranslation } from '@/i18n';
import { ExperienceSection } from './_home-sections/experience/ExperienceSection';
import { ProjectsSection } from './_home-sections/projects/ProjectsSection';

export default async function Home() {
    const { t } = await useTranslation();
    return (
        <>
            <Hero />
            <Text as='h3' fontSize='3xl' fontWeight='bold' textAlign='center'>
                {t('hero.socialProof')}
            </Text>
            <SocialProof />
            <ExperienceSection />
            <ProjectsSection />
        </>
    );
}
