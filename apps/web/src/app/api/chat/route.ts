import { OpenAIStream, StreamingTextResponse } from 'ai';
import { Configuration, OpenAIApi } from 'openai-edge';
import { generatePrePrompt } from './utils/generatePrePrompt';

export const runtime = 'edge';

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(req: Request) {
    const body = await req.json();
    const { messages, lang } = body;

    const res = await openai.createChatCompletion({
        model: 'gpt-4',
        messages: [...generatePrePrompt(lang), ...messages],
        temperature: 0.7,
        stream: true,
    });

    const stream = OpenAIStream(res);

    return new StreamingTextResponse(stream);
}
