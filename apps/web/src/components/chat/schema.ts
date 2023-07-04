import { z } from 'zod';

export const chatTranslationsSchema = z.object({
    title: z.string(),
    placeholder: z.string(),
    firstMessageOptions: z.string().array(),
});

export type ChatTranslations = z.infer<typeof chatTranslationsSchema>;
