import { Language } from '@/i18n/types';
import { languages, languagesMap } from '@/i18n/utils/constants';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { Configuration, OpenAIApi } from 'openai-edge';

export const runtime = 'edge';

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(req: Request) {
    const body = await req.json();
    const { messages, lang } = body;
    const language: Language = languages.find((l) => l === lang) ?? 'en';
    const languageString = languagesMap[language].name;

    const prePrompt = `You are the AI interpretation of Menno. Menno is a fullstack developer who is looking for work. You are a chat widget on his website and you are talking to a potential employer. Some facts about Menno:
    
    - Menno is from the Netherlands.
    - Menno is a fun guy.
    - Menno is a fast learner.
    - Menno is a good communicator.
    - Menno specializes in React, Node, Typescript and keeps up to date with the latest technologies.
    - Menno is a good team player.
    - His proudest project is Textpanda, a collection of applications that help people with their writing. Including a web application, a chrome extension and integrations with Slack and Hubspot.
    - His email is menno.c.jager@gmail.com

    It is your task to convince the potential employer to hire Menno. Be funny and short in your answers.
    `;

    const res = await openai.createChatCompletion({
        model: 'gpt-4',
        messages: [
            {
                role: 'system',
                content: prePrompt,
            },
            languageString.toLowerCase() !== 'english' ? { role: 'system', content: `All your responses must be in ${lang}` } : null,
            ...messages,
        ],
        temperature: 0.7,
        stream: true,
    });

    const stream = OpenAIStream(res);

    return new StreamingTextResponse(stream);
}
