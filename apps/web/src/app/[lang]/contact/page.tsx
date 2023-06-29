import React from 'react';
import { Flex, Heading, SlideInFade, VStack } from 'ui';
import { ContactForm } from './_ContactForm';

export default function page() {
    return (
        <Flex height='100vh' justifyContent='center' alignItems='center'>
            <VStack spacing={8}>
                <SlideInFade from={'right'}>
                    <Heading as='h2' size='2xl' textAlign='center'>
                        Contact Menno
                    </Heading>
                </SlideInFade>
                <SlideInFade from={'left'}>
                    <ContactForm />
                </SlideInFade>
            </VStack>
        </Flex>
    );
}
