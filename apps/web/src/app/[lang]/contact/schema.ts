import { z } from 'zod';

export const contactTranslationsSchema = z.object({
    title: z.string(),
    email: z.string(),
    subject: z.string(),
    message: z.string(),
    submit: z.string(),
    formErrors: z.object({
        emailValidation: z.string(),
        subjectLenght: z.string(),
        messageLength: z.string(),
    }),
    formSuccess: z.object({
        title: z.string(),
        message: z.string(),
    }),
});

export type ContactTranslations = z.infer<typeof contactTranslationsSchema>;
