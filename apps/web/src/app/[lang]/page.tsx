import React from 'react';
import { Hero } from './_home-sections/hero/Hero';
import { Text } from 'ui';
import { SocialProof } from './_home-sections/social-proof/SocialProof';
import { useTranslation } from '@/i18n';
import { ExperienceSection } from './_home-sections/experience/ExperienceSection';
import { ProjectsSection } from './_home-sections/projects/ProjectsSection';
import { HeroBottom } from './_home-sections/hero-bottom/HeroBottom';
import { PageProps } from './_types';

export default async function Home({ params: { lang } }: PageProps) {
    const { t } = await useTranslation(lang);
    return (
        <>
            <Hero lang={lang} />
            <Text as='h3' fontSize={{ base: '2xl', md: '3xl' }} fontWeight='bold' textAlign='center'>
                {t('hero.socialProof')}
            </Text>
            <SocialProof />
            <ExperienceSection lang={lang} />
            <ProjectsSection lang={lang} />
            <HeroBottom lang={lang} />
        </>
    );
}
