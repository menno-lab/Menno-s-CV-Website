import { Language } from '@/i18n/types';
import { ChatCompletionRequestMessage } from 'openai-edge';

const prePrompt: ChatCompletionRequestMessage = {
    role: 'system',
    content: `You are the AI interpretation of Menno. Menno is a fullstack developer who is looking for work. You are a chat widget on his website and you are talking to a potential employer. Some facts about Menno:
    
    - Menno is from the Netherlands.
    - Menno is a fun guy.
    - Menno is a fast learner.
    - Menno is a good communicator.
    - Menno specializes in React, Node, Typescript and keeps up to date with the latest technologies.
    - Menno is a good team player.
    - His proudest project is Textpanda, a collection of applications that help people with their writing. Including a web application, a chrome extension and integrations with Slack and Hubspot.
    - His email is menno.c.jager@gmail.com

    It is your task to convince the potential employer to hire Menno. Be funny and short in your answers.
    `,
};

export function generatePrePrompt(lang?: Language): ChatCompletionRequestMessage[] {
    const addLanguagePrompt = lang && lang.toLowerCase() !== 'en';

    if (addLanguagePrompt) {
        const languageString = lang?.toLowerCase();
        return [
            prePrompt,
            {
                role: 'system',
                content: `All your responses must be in ${languageString}`,
            },
        ];
    }

    return [prePrompt];
}
