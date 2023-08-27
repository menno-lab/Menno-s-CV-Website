'use client';
import React from 'react';
import { SimpleGrid, useExperienceIllustrations } from 'ui';
import { ExperienceCard } from './ExperienceCard';
import { ExperienceItem } from './types';

interface ExperienceGridProps {
    items: ExperienceItem[];
}

export function ExperienceGrid({ items }: ExperienceGridProps) {
    const illustrations = useExperienceIllustrations();

    return (
        <SimpleGrid minChildWidth={{ base: '80vw', md: '400px' }} spacing='30px'>
            {items.map((item, i) => (
                <ExperienceCard key={i} item={item} illustration={illustrations[item.company.key]} />
            ))}
        </SimpleGrid>
    );
}
