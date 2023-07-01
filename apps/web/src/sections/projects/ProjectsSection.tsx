'use client';

import React from 'react';
import { PageSection } from '../shared/PageSection';
import { ProjectCard } from './ProjectCard';
import { motion } from 'framer-motion';
import { Flex } from 'ui';
import { ProjectsTranslations } from './schema';

interface ProjectsSectionProps {
    translations: ProjectsTranslations;
}

export function ProjectsSection({ translations }: ProjectsSectionProps) {
    const { title, subtitle, items } = translations;
    return (
        <PageSection title='Projects'>
            <Flex gap={10}>
                {items.map((item, i) => (
                    <motion.div
                        key={i}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.3 + i * 0.3 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 },
                        }}
                    >
                        <ProjectCard />
                    </motion.div>
                ))}
            </Flex>
        </PageSection>
    );
}
