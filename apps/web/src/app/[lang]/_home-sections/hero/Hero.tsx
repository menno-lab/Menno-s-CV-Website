import React from 'react';
import { Button, Heading, Stack, Text, VStack } from 'ui';
import { useTranslation } from '@/i18n';
import Link from 'next/link';
import { getLanguage } from '@/i18n/utils/getLanguage';

export async function Hero() {
    const { t } = await useTranslation('common', 'hero');
    const lang = getLanguage();
    return (
        <VStack spacing={8} pt={{ base: '4vh', md: '14vh' }} pb={{ base: '10vh', md: '20vh' }}>
            <Heading as='h1' size={{ base: '3xl', md: '4xl' }} textAlign='center'>
                {t('title')}
            </Heading>
            <Text as='h2' size={{ base: 'lg', md: 'xl' }} textAlign='center'>
                {t('subtitle')}
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                <Link href={`/${lang}/contact`}>
                    <Button size='lg' colorScheme='primary' width='full'>
                        {t('primaryCta')}
                    </Button>
                </Link>
                <Link href={`/${lang}#projects`}>
                    <Button size='lg' colorScheme='secondary' width='full'>
                        {t('secondaryCta')}
                    </Button>
                </Link>
            </Stack>
        </VStack>
    );
}
