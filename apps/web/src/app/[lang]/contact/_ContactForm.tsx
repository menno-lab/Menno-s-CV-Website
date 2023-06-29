'use client';

import React from 'react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    VStack,
    Input,
    Textarea,
    AbsoluteCenter,
    useToast,
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { RouterInput, trpc } from '../../../utils/trpc';
import { Box, Button, Square1, useTheme } from 'ui';

type FormSubmitValues = RouterInput['contact']['submit'];

export function ContactForm() {
    const { theme } = useTheme();
    const toast = useToast();
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm<FormSubmitValues>();

    const { mutate, isLoading, error } = trpc.contact.submit.useMutation({
        onSuccess: () => {
            toast({
                title: 'Message sent',
                description: 'We will get back to you shortly!',
                status: 'success',
                duration: 9000,
                isClosable: true,
                position: 'bottom-left',
            });
            reset();
        },
    });

    return (
        <>
            <AbsoluteCenter height='90vh' width='100vw' display='flex' justifyContent='flex-end' alignItems='flex-end' opacity={0.2}>
                <Square1 size='33vw' color={theme.accent} />
            </AbsoluteCenter>
            <Box width='100%'>
                <form
                    onSubmit={handleSubmit((values) => {
                        mutate(values);
                    })}
                >
                    <VStack spacing={8}>
                        <FormControl isRequired isInvalid={!!errors.email}>
                            <FormLabel>Email</FormLabel>
                            <Input
                                {...register('email', {
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: 'Entered value does not match email format',
                                    },
                                })}
                                autoComplete='off'
                                placeholder='email'
                                type='email'
                                focusBorderColor={theme.accent}
                                color={theme.text}
                                backgroundColor={theme.background}
                            />
                            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
                        </FormControl>
                        <FormControl isRequired isInvalid={!!errors.subject}>
                            <FormLabel>subject</FormLabel>
                            <Input
                                {...register('subject', {
                                    minLength: { value: 4, message: 'Subject too short' },
                                })}
                                autoComplete='off'
                                placeholder='subject'
                                focusBorderColor={theme.accent}
                                color={theme.text}
                                backgroundColor={theme.background}
                            />
                            <FormErrorMessage>{errors.subject?.message}</FormErrorMessage>
                        </FormControl>
                        <FormControl isRequired isInvalid={!!errors.message}>
                            <FormLabel>message</FormLabel>
                            <Textarea
                                {...register('message', { minLength: { value: 10, message: 'Message too short' } })}
                                placeholder='message'
                                autoComplete='off'
                                focusBorderColor={theme.accent}
                                color={theme.text}
                                backgroundColor={theme.background}
                            />
                            <FormErrorMessage>{errors.message?.message}</FormErrorMessage>
                        </FormControl>
                        <Button type='submit' variant='primary' width='100%' isLoading={isLoading}>
                            submit
                        </Button>
                        {error && (
                            <Alert status='error'>
                                <AlertIcon />
                                <AlertTitle>Error</AlertTitle>
                                <AlertDescription>{error.message}</AlertDescription>
                            </Alert>
                        )}
                    </VStack>
                </form>
            </Box>
        </>
    );
}
