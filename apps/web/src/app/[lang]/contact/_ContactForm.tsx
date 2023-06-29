'use client';

import React from 'react';
import { FormControl, FormLabel, FormErrorMessage, VStack, Input, Textarea } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { RouterInput } from '../../../utils/trpc';
import { Box, Button, useTheme } from 'ui';

type FormSubmitValues = RouterInput['contact']['submit'];

export function ContactForm() {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<FormSubmitValues>();
    const { theme } = useTheme();

    return (
        <Box width='100%'>
            <form
                onSubmit={handleSubmit((values) => {
                    console.log(values);
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
                            placeholder='email'
                            type='email'
                            focusBorderColor={theme.accent}
                            color={theme.text}
                        />
                        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
                    </FormControl>
                    <FormControl isRequired isInvalid={!!errors.subject}>
                        <FormLabel>subject</FormLabel>
                        <Input
                            {...register('subject', {
                                minLength: { value: 4, message: 'Subject too short' },
                            })}
                            placeholder='subject'
                            focusBorderColor={theme.accent}
                            color={theme.text}
                        />
                        <FormErrorMessage>{errors.subject?.message}</FormErrorMessage>
                    </FormControl>
                    <FormControl isRequired isInvalid={!!errors.message}>
                        <FormLabel>message</FormLabel>
                        <Textarea
                            {...register('message', { minLength: { value: 10, message: 'Message too short' } })}
                            placeholder='message'
                            focusBorderColor={theme.accent}
                            color={theme.text}
                        />
                        <FormErrorMessage>{errors.message?.message}</FormErrorMessage>
                    </FormControl>
                    <Button type='submit' variant='primary' width='100%'>
                        submit
                    </Button>
                </VStack>
            </form>
        </Box>
    );
}
