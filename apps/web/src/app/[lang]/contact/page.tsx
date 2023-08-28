import React from 'react';
import { Center, Container, Heading, VStack } from 'ui';
import { ContactFormCopies } from './types';
import { ContactForm } from './_ContactForm';
import { useTranslation } from '@/i18n';
import { PageProps } from '../_types';

export default async function ContactPage({ params: { lang } }: PageProps) {
    const { t } = await useTranslation(lang, 'common');
    const copies = t<ContactFormCopies>('contact');
    return (
        <Container as='main' maxW={'7xl'} minHeight='calc(100vh - 180px)' py={8}>
            <Center>
                <VStack align='stretch' spacing={8} width='full' maxW={'2xl'}>
                    <Heading as='h1' size='2xl'>
                        {t('contact.title')}
                    </Heading>
                    <ContactForm copies={copies} />
                </VStack>
            </Center>
        </Container>
    );
}
