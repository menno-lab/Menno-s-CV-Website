import { SlackBlock } from '../types';

export function createSlackBlocks(text: string, payload: Record<string, any>): SlackBlock[] {
    return [
        {
            type: 'section',
            text: {
                type: 'plain_text',
                text,
                emoji: true,
            },
        },
        {
            type: 'divider',
        },
        {
            type: 'section',
            text: {
                type: 'plain_text',
                text: 'Payload:',
                emoji: true,
            },
        },
        {
            type: 'section',
            text: {
                type: 'mrkdwn',
                text: '```' + JSON.stringify(payload, null, 4) + '```',
            },
        },
    ];
}
