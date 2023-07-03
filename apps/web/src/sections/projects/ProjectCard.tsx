import { CardBody, Stack, Heading } from '@chakra-ui/react';
import React from 'react';
import { Card, Text, Box } from 'ui';
import { ProjectsTranslations } from './schema';
import { useProjectIllustrations } from '../hooks/useProjectIllustrations';
import { motion } from 'framer-motion';

interface ProjectCardProps {
    item: ProjectsTranslations['items'][number];
}

export function ProjectCard({ item }: ProjectCardProps) {
    const illustrationMap = useProjectIllustrations();
    return (
        <motion.div
            whileHover={{
                scale: 1.05,
            }}
        >
            <Card boxShadow='2xl' cursor='pointer' height={{ base: '100%', sm: '300px' }}>
                <CardBody>
                    <Stack spacing={4}>
                        <Box height='36px'>{illustrationMap[item.key]}</Box>
                        <Heading size='md'>{item.title}</Heading>
                        <Text>{item.description}</Text>
                    </Stack>
                </CardBody>
            </Card>
        </motion.div>
    );
}
