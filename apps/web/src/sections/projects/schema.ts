import { z } from 'zod';

const projectKeySchema = z.union([z.literal('textpanda'), z.literal('infinitale'), z.literal('storyscape')]);

export type ProjectKey = z.infer<typeof projectKeySchema>;

const projectItemSchema = z.object({
    key: projectKeySchema,
    title: z.string(),
    description: z.string(),
    href: z.string().optional(),
});

export const projectsTranslationsSchema = z.object({
    title: z.string(),
    subtitle: z.string(),
    items: projectItemSchema.array(),
});

export type ProjectsTranslations = z.infer<typeof projectsTranslationsSchema>;
