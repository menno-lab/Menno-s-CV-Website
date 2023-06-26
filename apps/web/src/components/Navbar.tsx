import React from 'react';
import { useTranslation } from '../i18n';
import Link from 'next/link';
import { Box, ButtonGroup, Container, Flex, NavButtonGroup, Text } from 'ui';

interface NavbarProps {
    lang: string;
}

export async function Navbar({ lang }: NavbarProps) {
    const { t } = await useTranslation(lang);
    const copies = t('nav') as unknown as Record<string, string>;
    console.log(copies);

    return (
        <Box as='nav' boxShadow='xl' width='100vw' bg='background' py={4}>
            <Container minWidth='8xl' px={0}>
                <Flex>
                    <Link href='/'>
                        <Text fontWeight={700} fontSize={20}>
                            Menno Jager
                        </Text>
                    </Link>
                    <Flex flex={1} justifyContent='end' alignItems='center'>
                        <ButtonGroup variant='link' spacing='8'>
                            <NavButtonGroup />
                            {Object.keys(copies).map((item) => (
                                <Link key={item} href={item} style={{ textTransform: 'capitalize' }}>
                                    <Text>{copies[item]}</Text>
                                </Link>
                            ))}
                        </ButtonGroup>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    );
}
