import React from 'react';
import { Button, Heading, Stack, Text, VStack } from 'ui';
import { useTranslation } from '@/i18n';

export async function Hero() {
    const { t } = await useTranslation('common', 'hero');
    return (
        <VStack spacing={8} pt={{ base: 6, md: '14vh' }} pb={{ base: 6, md: '20vh' }}>
            <Heading as='h1' size='4xl' textAlign='center'>
                {t('title')}
            </Heading>
            <Text as='h2' fontSize='xl' textAlign='center'>
                {t('subtitle')}
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                <Button size='lg' colorScheme='primary'>
                    {t('primaryCta')}
                </Button>
                <Button size='lg' colorScheme='secondary'>
                    {t('secondaryCta')}
                </Button>
            </Stack>
        </VStack>
    );
}
