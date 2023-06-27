'use client';

import { Box, Button, Heading, VStack, Text } from 'ui';

export default function Page() {
    return (
        <Box bg='background' height='100vh'>
            <Heading>Hello world!</Heading>
            <VStack spacing={4}>
                <Button width='400px' variant='primary'>
                    Primary
                </Button>
                <Button width='400px' variant='secondary'>
                    Secondary
                </Button>
                <Button width='400px' variant='accent'>
                    Accent
                </Button>
                <Text>
                    I appreciate your response. I understand your position as the company's counsel and the limitations it brings. In that
                    case, would it be possible for you to direct me to someone who could provide guidance on this matter? I believe it's an
                    important consideration as I make decisions regarding my future plans. Thank you for your understanding.
                </Text>
            </VStack>
        </Box>
    );
}
