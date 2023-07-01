"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBlocks = void 0;
function createBlocks(text, payload) {
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
exports.createBlocks = createBlocks;
