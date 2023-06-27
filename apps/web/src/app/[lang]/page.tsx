import Image from 'next/image';
import { Box, Button, Container, Flex, Heading, Stack, Text, Blob } from 'ui';
import Test from '../../../public/profile.svg';

export default function Page() {
    return (
        <Container maxW={'7xl'} paddingTop={'60px'}>
            <Stack align={'center'} spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }} direction={{ base: 'column', md: 'row' }}>
                <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                    <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
                        <Text as={'span'} position={'relative'}>
                            Write once,
                        </Text>
                        <br />
                        <Text as={'span'} color={'red.400'}>
                            use everywhere!
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
                <Flex flex={1} justifyContent={'center'} alignItems={'center'} position={'relative'} w={'full'}>
                    <Blob w={'110%'} h={'190%'} position={'absolute'} top={'-20%'} zIndex={0} />

                    <Box position={'relative'} width={'full'} height='300px' opacity={0.8}>
                        <Image src={Test} alt={'Menno profile picture'} />
                    </Box>
                </Flex>
            </Stack>
        </Container>
    );
}
