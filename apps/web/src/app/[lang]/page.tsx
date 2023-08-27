import React from 'react';
import { Hero } from './_home-sections/hero/Hero';
import { Text } from 'ui';
import { SocialProof } from './_home-sections/social-proof/SocialProof';
import { useTranslation } from '@/i18n';

export default async function Home() {
    const { t } = await useTranslation();
    return (
        <div>
            <Hero />
            <Text as='h3' fontSize='3xl' fontWeight='bold' textAlign='center'>
                {t('hero.socialProof')}
            </Text>
            <SocialProof />
        </div>
    );
}
