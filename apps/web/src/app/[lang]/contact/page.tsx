import React from 'react';
import { Flex, Heading, SlideInFade, Square1, VStack, AbsoluteCenter } from 'ui';
import { ContactForm } from './_ContactForm';
import { RouteWithLang } from '../../../utils/types';
import { useTranslation } from '../../../i18n';
import { contactTranslationsSchema } from './schema';

export default async function page({ params: { lang } }: RouteWithLang) {
    const { t } = await useTranslation(lang);
    return (
        <>
            <Flex height='100vh' justifyContent='center' alignItems='center' zIndex={2}>
                <VStack spacing={8}>
                    <SlideInFade from={'right'}>
                        <Heading as='h2' size='2xl' textAlign='center'>
                            {t('contact.title')}
                        </Heading>
                    </SlideInFade>
                    <SlideInFade from={'left'}>
                        <ContactForm translations={contactTranslationsSchema.parse(t('contact'))} />
                    </SlideInFade>
                </VStack>
            </Flex>
            <AbsoluteCenter
                height='90vh'
                width='100vw'
                display='flex'
                justifyContent='flex-end'
                alignItems='flex-end'
                opacity={0.2}
                pointerEvents='none'
            >
                <Square1 size='33vw' color='accent' />
            </AbsoluteCenter>
        </>
    );
}
