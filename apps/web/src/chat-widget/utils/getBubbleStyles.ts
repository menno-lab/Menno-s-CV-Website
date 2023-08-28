interface ChatBubbleStyles {
    bg: string;
    textAlign: 'left' | 'right';
    alignItems: 'flex-start' | 'flex-end';
    borderTopRightRadius: string;
    borderTopLeftRadius: string;
}

export function getBubbleStyles(isAiMessage: boolean): ChatBubbleStyles {
    if (isAiMessage) {
        return {
            borderTopRightRadius: '0',
            borderTopLeftRadius: 'xl',
            bg: 'primary.500',
            textAlign: 'left',
            alignItems: 'flex-start',
        };
    }
    return {
        borderTopRightRadius: 'xl',
        borderTopLeftRadius: '0',
        bg: 'secondary.500',
        textAlign: 'right',
        alignItems: 'flex-end',
    };
}
