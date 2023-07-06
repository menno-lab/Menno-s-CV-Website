import { z } from 'zod';

export const footerTranslationSchema = z.object({
    language: z.string(),
    sourceCode: z.string(),
});

export type FooterTranslation = z.infer<typeof footerTranslationSchema>;
