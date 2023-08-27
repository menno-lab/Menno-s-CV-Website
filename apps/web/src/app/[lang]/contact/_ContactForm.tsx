'use client';
import React from 'react';
import { ContactFormCopies } from './types';
import { RouterInput, trpc } from '@/utils/trpc';
import { useForm } from 'react-hook-form';
import {
    VStack,
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
    Textarea,
    Button,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Text,
} from 'ui';

interface ContactFormProps {
    copies: ContactFormCopies;
}

type FormSubmitValues = RouterInput['contact']['submit'];

export function ContactForm({ copies }: ContactFormProps) {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<FormSubmitValues>();
    const { mutate, isLoading, error, isSuccess } = trpc.contact.submit.useMutation();

    if (isSuccess) {
        return (
            <Alert status='success'>
                <AlertIcon />
                <AlertTitle>{copies.formSuccess.title}</AlertTitle>
                <AlertDescription>{copies.formSuccess.message}</AlertDescription>
            </Alert>
        );
    }

    return (
        <form
            onSubmit={handleSubmit((values) => {
                mutate(values);
            })}
        >
            <VStack width={{ base: '80vw', md: '100%' }} spacing={8}>
                <FormControl isRequired isInvalid={!!errors.email}>
                    <FormLabel>{copies.email}</FormLabel>
                    <Input
                        {...register('email', {
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: copies.formErrors.emailValidation,
                            },
                        })}
                        autoComplete='off'
                        type='email'
                    />
                    <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
                </FormControl>
                <FormControl isRequired isInvalid={!!errors.subject}>
                    <FormLabel>{copies.subject}</FormLabel>
                    <Input
                        {...register('subject', {
                            minLength: { value: 4, message: copies.formErrors.subjectLenght },
                        })}
                        autoComplete='off'
                    />
                    <FormErrorMessage>{errors.subject?.message}</FormErrorMessage>
                </FormControl>
                <FormControl isRequired isInvalid={!!errors.message}>
                    <FormLabel>{copies.message}</FormLabel>
                    <Textarea
                        {...register('message', { minLength: { value: 10, message: copies.formErrors.messageLength } })}
                        autoComplete='off'
                        resize='vertical'
                        minHeight='200px'
                    />
                    <FormErrorMessage>{errors.message?.message}</FormErrorMessage>
                </FormControl>
                <Button type='submit' colorScheme='primary' width='100%' isLoading={isLoading}>
                    {copies.submit}
                </Button>
                {error && (
                    <Alert status='error'>
                        <AlertIcon />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>
                            <VStack>
                                <Text>{error.message}</Text>
                                <Text>Please contact menno.c.jager@gmail.com</Text>
                            </VStack>
                        </AlertDescription>
                    </Alert>
                )}
            </VStack>
        </form>
    );
}
