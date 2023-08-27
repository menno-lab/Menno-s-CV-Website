const companies = ['supermetrics', 'textpanda', 'linkedin', 'google'] as const;
export type Company = (typeof companies)[number];

export interface ExperienceItem {
    company: {
        key: Company;
        label: string;
    };
    role: string;
    location: string;
    date: string;
    tasks: string[];
}
