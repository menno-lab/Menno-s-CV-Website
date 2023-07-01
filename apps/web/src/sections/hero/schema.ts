import { z } from 'zod';

export const heroTranslationsSchema = z.object({
    title: z.string(),
    subtitle: z.string(),
    primaryCta: z.string(),
    secondaryCta: z.string(),
});

export type HeroTranslations = z.infer<typeof heroTranslationsSchema>;
