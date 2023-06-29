import { CompanyLogo, FaLinkedin, IconButton, Box, Container, Stack, Text } from 'ui';

export function Footer() {
    return (
        <Box bg='gray.800'>
            <Stack
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}
            >
                <CompanyLogo />
                <Text>© 2022 Chakra Templates. All rights reserved</Text>
                <Stack direction={'row'} spacing={6}>
                    <IconButton variant='outline' colorScheme='teal' aria-label='Call Sage' fontSize='20px' icon={<FaLinkedin />} />
                </Stack>
            </Stack>
        </Box>
    );
}
