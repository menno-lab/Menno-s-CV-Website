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
                scale: 1.1,
            }}
        >
            <Card maxW='sm' boxShadow='2xl' cursor='pointer' size='sm' pb={4}>
                <CardBody>
                    <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <Box boxSize={'xs'}>{illustrationMap[item.key]}</Box>
                    </Box>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{item.title}</Heading>
                        <Text>{item.description}</Text>
                    </Stack>
                </CardBody>
            </Card>
        </motion.div>
    );
}
