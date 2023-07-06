'use client';

import React from 'react';
import { ExperienceItem } from './schema';
import { Card, Text, Box, ListItem, Stack, FaMapPin, useTheme, FaCalendar } from 'ui';
import { CardBody, HStack, Tag, TagLabel, TagLeftIcon, UnorderedList, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

interface ExperienceCardProps {
    item: ExperienceItem;
    illustration: JSX.Element;
}

export function ExperienceCard({ item, illustration }: ExperienceCardProps) {
    const logoSize = '54px';
    const { theme } = useTheme();

    return (
        <motion.div
            whileHover={{
                scale: 1.05,
            }}
        >
            <Card boxShadow='2xl' cursor='pointer' height={{ base: '100%', xl: '540px' }}>
                <CardBody>
                    <Stack spacing={6}>
                        <Box mb='18px'>
                            <HStack height={logoSize} gap={2}>
                                <Box height='100%'>{illustration}</Box>
                                <VStack height='100%' justifyContent='space-between' alignItems='flex-start'>
                                    <Text fontSize='md' fontWeight={600}>
                                        {item.company.label}
                                    </Text>
                                    <Text fontSize='lg' fontWeight={600}>
                                        {item.role}
                                    </Text>
                                </VStack>
                            </HStack>
                        </Box>
                        <Tag size='md' variant='subtle' backgroundColor={theme.accent} color={theme.text} width='fit-content'>
                            <TagLeftIcon as={FaMapPin} />
                            <TagLabel>{item.location}</TagLabel>
                        </Tag>
                        <Tag size='md' variant='subtle' backgroundColor={theme.accent} color={theme.text} width='fit-content'>
                            <TagLeftIcon as={FaCalendar} />
                            <TagLabel>{item.date}</TagLabel>
                        </Tag>
                        <UnorderedList>
                            {item.tasks.map((task, i) => (
                                <ListItem key={i} fontSize='sm'>
                                    {task}
                                </ListItem>
                            ))}
                        </UnorderedList>
                    </Stack>
                </CardBody>
            </Card>
        </motion.div>
    );
}
