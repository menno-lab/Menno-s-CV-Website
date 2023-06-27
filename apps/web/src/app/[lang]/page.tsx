import Image from 'next/image';
import { Box, Button, Container, Flex, Heading, Stack, Text } from 'ui';
import ProfileImage from '../../../public/profile.svg';

export default function Page() {
    return (
        <Container maxW={'7xl'} paddingTop={'60px'}>
            <Stack align={'center'} spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }} direction={{ base: 'column', md: 'row' }}>
                <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                    <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
                        <Text as={'span'} position={'relative'}>
                            Hi,
                        </Text>
                        <br />
                        <Text as={'span'} color={'red.400'}>
                            I'm Menno
                        </Text>
                    </Heading>
                    <Text>
                        Snippy is a rich coding snippets app that lets you create your own code snippets, categorize them, and even sync
                        them in the cloud so you can use them anywhere. All that is free!
                    </Text>
                    <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
                        <Button
                            size={'lg'}
                            fontWeight={'normal'}
                            px={6}
                            colorScheme={'red'}
                            bg={'red.400'}
                            _hover={{ bg: 'red.500' }}
                            variant='primary'
                        >
                            Get started
                        </Button>
                        <Button size={'lg'} fontWeight={'normal'} px={6} variant='secondary'>
                            How It Works
                        </Button>
                    </Stack>
                </Stack>
                <Flex flex={1} justifyContent={'center'} alignItems={'center'} w={'full'}>
                    <Box bg='accent' width='480px' height='480px' borderRadius={'50%'} position={'relative'} boxShadow={'2xl'}>
                        <Image
                            src={ProfileImage}
                            alt={'Menno profile picture'}
                            style={{ borderRadius: '50%', width: '550px', height: '550px', position: 'absolute', bottom: -16 }}
                        />
                    </Box>
                </Flex>
            </Stack>
        </Container>
    );
}
