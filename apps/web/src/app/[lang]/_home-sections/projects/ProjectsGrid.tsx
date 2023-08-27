'use client';
import React from 'react';
import { ProjectItem } from './types';
import { SimpleGrid, useProjectIllustrations } from 'ui';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ProjectCard } from './ProjectCard';

interface ProjectsGridProps {
    items: ProjectItem[];
}

export function ProjectsGrid({ items }: ProjectsGridProps) {
    const illustrations = useProjectIllustrations();
    return (
        <SimpleGrid minChildWidth='240px' spacing='30px'>
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
                    <Link href={item.href} target='_blank'>
                        <ProjectCard item={item} illustration={illustrations[item.key]} />
                    </Link>
                </motion.div>
            ))}
        </SimpleGrid>
    );
}
