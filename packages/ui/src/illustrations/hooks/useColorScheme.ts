import { useColorModeValue, useToken } from '@chakra-ui/react';

export function useColorScheme() {
    const [color, secondaryColor] = useToken('colors', ['primary.500', 'secondary.500']);
    const textColor = useColorModeValue('gray.800', 'white');
    return {
        color,
        secondaryColor,
        textColor,
    };
}
