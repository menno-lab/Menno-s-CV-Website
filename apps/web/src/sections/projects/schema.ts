import { z } from 'zod';

const projectItemSchema = z.object({
    name: z.string(),
    description: z.string(),
    href: z.string().optional(),
});

export const projectsTranslationsSchema = z.object({
    title: z.string(),
    subtitle: z.string(),
    items: projectItemSchema.array(),
});

export type ProjectsTranslations = z.infer<typeof projectsTranslationsSchema>;
