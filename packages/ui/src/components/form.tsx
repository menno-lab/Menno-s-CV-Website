import { ButtonGroup as ChakraButtonGroup, ButtonGroupProps } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

export function ButtonGroup({ children, ...props }: PropsWithChildren<ButtonGroupProps>) {
    return <ChakraButtonGroup {...props}>{children}</ChakraButtonGroup>;
}
