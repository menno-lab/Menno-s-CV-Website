export interface SlackBlock {
    type: 'section' | 'divider';
    text?: {
        type?: 'plain_text' | 'mrkdwn';
        text?: string;
        emoji?: boolean;
    };
}
