import { z } from 'zod';

const experienceCompanySchema = z.union([z.literal('supermetrics'), z.literal('textpanda'), z.literal('linkedin'), z.literal('google')]);

export type ExperienceCompany = z.infer<typeof experienceCompanySchema>;

const experienceSchema = z.object({
    company: z.object({
        key: experienceCompanySchema,
        label: z.string(),
    }),
    role: z.string(),
    location: z.string(),
    date: z.string(),
    tasks: z.string().array(),
});

export type ExperienceItem = z.infer<typeof experienceSchema>;

export const experienceTranslationsSchema = z.object({
    title: z.string(),
    subtitle: z.string(),
    items: experienceSchema.array(),
});

export type ExperienceTranslations = z.infer<typeof experienceTranslationsSchema>;
