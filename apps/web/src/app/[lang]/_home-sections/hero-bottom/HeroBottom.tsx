import { useTranslation } from '@/i18n';
import Link from 'next/link';
import React from 'react';
import { Button, Container, Heading, VStack } from 'ui';

export async function HeroBottom() {
    const { t } = await useTranslation('common', 'heroBottom');
    return (
        <Container as='section' maxW={'7xl'} pt={8} pb='8vh'>
            <VStack py='10' spacing={10}>
                <Heading as='h2'>{t('title')}</Heading>
                <Link href='/contact'>
                    <Button colorScheme='primary' size='lg'>
                        {t('cta')}
                    </Button>
                </Link>
            </VStack>
        </Container>
    );
}
