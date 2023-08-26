import { LINKEDIN_PROFILE_URL, GITHUB_PROFILE_URL, GITHUB_REPO_URL } from '@/utils/constants';
import NextLink from 'next/link';
import { IconButton, Box, Container, Stack, Text, Heading, Button, FaLinkedin, FaGithub, FaExternalLinkAlt } from 'ui';

export function Footer() {
    return (
        <Box width='100vw' borderTop='1px' borderColor='inherit' minHeight='60px'>
            <Container maxW={'7xl'} px={4}>
                <Stack
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ base: 'center', md: 'space-between' }}
                    align={{ base: 'center', md: 'center' }}
                >
                    <Stack direction='row' spacing={4}>
                        <Heading size='md' color='accent'>
                            MJ
                        </Heading>
                    </Stack>
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
                                dsfsdf
                            </Button>
                        </NextLink>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}
