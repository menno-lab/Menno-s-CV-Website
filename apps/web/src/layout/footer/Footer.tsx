import NextLink from 'next/link';
import { FaLinkedin, FaGithub, FaExternalLinkAlt, IconButton, Box, Container, Stack, Text, Heading, Button, Link } from 'ui';
import { GITHUB_PROFILE_URL, GITHUB_REPO_URL, LINKEDIN_PROFILE_URL } from '../../utils/constants';
import { FooterTranslation } from './schema';

interface FooterProps {
    translations: FooterTranslation;
}

export function Footer({ translations }: FooterProps) {
    return (
        <Box bg='background' width='100vw' borderTop='1px' borderColor='gray.600'>
            <Container maxW={'7xl'} px={4}>
                <Stack
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ base: 'center', md: 'space-between' }}
                    align={{ base: 'center', md: 'center' }}
                >
                    <Heading size='md' color='accent'>
                        MJ
                    </Heading>
                    <Text>© 2023 Menno Jager</Text>
                    <Stack direction={{ base: 'column', md: 'row' }} spacing={6}>
                        <Stack direction='row' spacing={6}>
                            <NextLink href={LINKEDIN_PROFILE_URL} target='_blank'>
                                <IconButton
                                    bg='secondary'
                                    variant='solid'
                                    aria-label='LinkedIn URL'
                                    fontSize='28px'
                                    icon={<FaLinkedin />}
                                    color='text'
                                    _hover={{ bg: 'accent' }}
                                    colorScheme='secondary'
                                />
                            </NextLink>

                            <NextLink href={GITHUB_PROFILE_URL} target='_blank'>
                                <IconButton
                                    bg='secondary'
                                    variant='solid'
                                    aria-label='Github URL'
                                    fontSize='28px'
                                    icon={<FaGithub />}
                                    color='text'
                                    _hover={{ bg: 'accent' }}
                                    colorScheme='secondary'
                                />
                            </NextLink>
                        </Stack>
                        <NextLink href={GITHUB_REPO_URL} target='_blank'>
                            <Button colorScheme='secondary' rightIcon={<FaExternalLinkAlt />} _hover={{ bg: 'accent' }}>
                                {translations.sourceCode}
                            </Button>
                        </NextLink>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}
