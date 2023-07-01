'use client';

import React from 'react';
import { PageSection } from '../shared/PageSection';
import { ProjectCard } from './ProjectCard';
import { motion } from 'framer-motion';
import { ProjectsTranslations } from './schema';
import { SimpleGrid } from '@chakra-ui/react';
import Link from 'next/link';

interface ProjectsSectionProps {
    translations: ProjectsTranslations;
}

export function ProjectsSection({ translations }: ProjectsSectionProps) {
    const { title, subtitle, items } = translations;
    return (
        <PageSection title={title} subtitle={subtitle}>
            <SimpleGrid minChildWidth='400px' spacing='20px'>
                {items.map((item, i) => (
                    <motion.div
                        key={item.key}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.3 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 },
                        }}
                    >
                        {item.href ? (
                            <Link href={item.href} target='_blank'>
                                <ProjectCard item={item} />
                            </Link>
                        ) : (
                            <ProjectCard item={item} />
                        )}
                    </motion.div>
                ))}
            </SimpleGrid>
        </PageSection>
    );
}
