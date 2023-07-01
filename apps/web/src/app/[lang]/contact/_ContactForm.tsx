'use client';

import React from 'react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    VStack,
    Input,
    Textarea,
    useToast,
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { RouterInput, trpc } from '../../../utils/trpc';
import { Box, Button, useTheme } from 'ui';
import { ContactTranslations } from './schema';

type FormSubmitValues = RouterInput['contact']['submit'];

interface ContactFormProps {
    translations: ContactTranslations;
}

export function ContactForm({ translations }: ContactFormProps) {
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
                title: translations.formSuccess.title,
                description: translations.formSuccess.message,
                status: 'success',
                duration: 9000,
                isClosable: true,
                position: 'bottom-left',
            });
            reset();
        },
    });

    return (
        <Box width='100%' display={{ base: 'flex', md: 'block' }} justifyContent='center'>
            <form
                onSubmit={handleSubmit((values) => {
                    mutate(values);
                })}
            >
                <VStack width={{ base: '80vw', md: '100%' }} spacing={8}>
                    <FormControl isRequired isInvalid={!!errors.email}>
                        <FormLabel>{translations.email}</FormLabel>
                        <Input
                            {...register('email', {
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: translations.formErrors.emailValidation,
                                },
                            })}
                            autoComplete='off'
                            type='email'
                            focusBorderColor={theme.accent}
                            color={theme.text}
                            backgroundColor={theme.background}
                            borderColor='gray.400'
                        />
                        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
                    </FormControl>
                    <FormControl isRequired isInvalid={!!errors.subject}>
                        <FormLabel>{translations.subject}</FormLabel>
                        <Input
                            {...register('subject', {
                                minLength: { value: 4, message: translations.formErrors.subjectLenght },
                            })}
                            autoComplete='off'
                            focusBorderColor={theme.accent}
                            color={theme.text}
                            backgroundColor={theme.background}
                            borderColor='gray.400'
                        />
                        <FormErrorMessage>{errors.subject?.message}</FormErrorMessage>
                    </FormControl>
                    <FormControl isRequired isInvalid={!!errors.message}>
                        <FormLabel>{translations.message}</FormLabel>
                        <Textarea
                            {...register('message', { minLength: { value: 10, message: translations.formErrors.messageLength } })}
                            autoComplete='off'
                            resize='vertical'
                            focusBorderColor={theme.accent}
                            color={theme.text}
                            backgroundColor={theme.background}
                            borderColor='gray.400'
                            minHeight='200px'
                        />
                        <FormErrorMessage>{errors.message?.message}</FormErrorMessage>
                    </FormControl>
                    <Button type='submit' colorScheme='primary' width='100%' isLoading={isLoading}>
                        {translations.submit}
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
    );
}
