import { z } from 'zod';

export const chatTranslationsSchema = z.object({
    title: z.string(),
    inputPlaceholder: z.string(),
    firstMessageOptions: z.string().array(),
    legalNotice: z.string(),
});

export type ChatTranslations = z.infer<typeof chatTranslationsSchema>;
