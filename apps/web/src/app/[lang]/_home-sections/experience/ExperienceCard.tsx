import React from 'react';
import { ExperienceItem } from './types';
import {
    Card,
    CardBody,
    Heading,
    Text,
    CardHeader,
    HStack,
    Box,
    VStack,
    UnorderedList,
    ListItem,
    Tag,
    FaCalendar,
    FaMapPin,
    TagLabel,
    TagLeftIcon,
    Stack,
} from 'ui';

interface ExperienceCardProps {
    item: ExperienceItem;
    illustration: JSX.Element;
}

export function ExperienceCard({ item, illustration }: ExperienceCardProps) {
    return (
        <Card>
            <CardHeader pb={2}>
                <HStack alignItems='start' spacing={4}>
                    <Box boxSize='50px'>{illustration}</Box>
                    <VStack align='stretch'>
                        <Text fontWeight='bold'>{item.company.label}</Text>
                        <Heading as='p' fontSize='lg'>
                            {item.role}
                        </Heading>
                    </VStack>
                </HStack>
            </CardHeader>
            <CardBody pb={12}>
                <VStack align='stretch' spacing={4}>
                    <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                        <Tag size='md' variant='subtle' width='fit-content' colorScheme='secondary'>
                            <TagLeftIcon as={FaMapPin} boxSize='10px' />
                            <TagLabel>{item.location}</TagLabel>
                        </Tag>
                        <Tag size='md' variant='subtle' width='fit-content' colorScheme='secondary'>
                            <TagLeftIcon as={FaCalendar} boxSize='10px' />
                            <TagLabel>{item.date}</TagLabel>
                        </Tag>
                    </Stack>
                    <UnorderedList spacing={4}>
                        {item.tasks.map((task, i) => (
                            <ListItem key={i} fontSize='smaller'>
                                {task}
                            </ListItem>
                        ))}
                    </UnorderedList>
                </VStack>
            </CardBody>
        </Card>
    );
}
