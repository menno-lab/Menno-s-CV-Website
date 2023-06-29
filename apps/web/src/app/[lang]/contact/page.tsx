import React from 'react';
import { Flex, Heading, SlideInFade, Square1, VStack, AbsoluteCenter } from 'ui';
import { ContactForm } from './_ContactForm';
import { RouteWithChildren } from '../../../utils/types';
import { useTranslation } from '../../../i18n';

export default async function page({ params: { lang } }: RouteWithChildren) {
    const { t } = await useTranslation(lang);
    return (
        <>
            <Flex height='100vh' justifyContent='center' alignItems='center' zIndex={2}>
                <VStack spacing={8}>
                    <SlideInFade from={'right'}>
                        <Heading as='h2' size='2xl' textAlign='center'>
                            {t('contact.contactMenno')}
                        </Heading>
                    </SlideInFade>
                    <SlideInFade from={'left'}>
                        <ContactForm translations={t('contact') as unknown as Record<string, string>} />
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
