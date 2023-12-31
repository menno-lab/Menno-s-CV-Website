import React from 'react';
import { Card, Text, Box, CardBody, Heading, Stack } from 'ui';
import { motion } from 'framer-motion';
import { ProjectItem } from './types';

interface ProjectCardProps {
    item: ProjectItem;
    illustration: JSX.Element;
}

export function ProjectCard({ item, illustration }: ProjectCardProps) {
    return (
        <motion.div
            whileHover={{
                scale: 1.05,
            }}
        >
            <Card boxShadow='2xl' cursor='pointer' height={{ base: '100%', sm: '320px' }}>
                <CardBody>
                    <Stack spacing={4}>
                        <Box height='36px'>{illustration}</Box>
                        <Heading size='md'>{item.title}</Heading>
                        <Text>{item.description}</Text>
                    </Stack>
                </CardBody>
            </Card>
        </motion.div>
    );
}
