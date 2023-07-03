'use client';

import React from 'react';
import { PageSection } from '../shared/PageSection';
import { ExperienceTranslations } from './schema';
import { ExperienceCard } from './ExperienceCard';
import { SimpleGrid } from '@chakra-ui/react';
import { useExperienceIllustrations } from '../hooks/useExperienceIllustrations';
import { motion } from 'framer-motion';

interface ExperienceSectionProps {
    translations: ExperienceTranslations;
}

export function ExperienceSection({ translations }: ExperienceSectionProps) {
    const { title, subtitle, items } = translations;
    const illustrations = useExperienceIllustrations();

    return (
        <PageSection title={title} subtitle={subtitle}>
            <SimpleGrid minChildWidth='300px' spacing='30px'>
                {items.map((item, i) => (
                    <motion.div
                        key={i}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.3 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 },
                        }}
                    >
                        <ExperienceCard item={item} illustration={illustrations[item.company.key]} />
                    </motion.div>
                ))}
            </SimpleGrid>
        </PageSection>
    );
}
