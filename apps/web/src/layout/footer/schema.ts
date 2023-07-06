import { z } from 'zod';

export const footerTranslationSchema = z.object({
    sourceCode: z.string(),
});

export type FooterTranslation = z.infer<typeof footerTranslationSchema>;
