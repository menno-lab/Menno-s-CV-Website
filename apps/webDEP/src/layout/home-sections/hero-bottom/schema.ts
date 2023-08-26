import { z } from 'zod';

export const heroBottomTranslationsSchema = z.object({
    title: z.string(),
    cta: z.string(),
});

export type HeroBottomTranslations = z.infer<typeof heroBottomTranslationsSchema>;
