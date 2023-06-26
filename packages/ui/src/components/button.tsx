import { PropsWithChildren } from 'react';
import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react';

export function Button({ children, ...props }: PropsWithChildren<ButtonProps>) {
    return <ChakraButton {...props}>{children}</ChakraButton>;
}
