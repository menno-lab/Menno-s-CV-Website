import { WebClient } from '@slack/web-api';
import { SlackBlock } from './types';

export async function sendInternalSlackMessage(blocks: SlackBlock[], text: string) {
    const token = process.env.SLACK_INTERNAL_TOKEN;
    const web = new WebClient(token);
    return await web.chat.postMessage({
        channel: 'contact-submissions',
        blocks,
        text,
    });
}
