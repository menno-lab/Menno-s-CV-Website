import { z } from 'zod';

const navItemSchema = z.object({
    label: z.string(),
    href: z.string(),
});

export type NavItem = z.infer<typeof navItemSchema>;

export const navbarTranslationsSchema = z.object({
    theme: z.string(),
    language: z.string(),
    contact: z.string(),
    navItems: navItemSchema.array(),
});

export type NavbarTranslations = z.infer<typeof navbarTranslationsSchema>;
