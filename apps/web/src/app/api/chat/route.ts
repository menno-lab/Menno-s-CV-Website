import { OpenAIStream, StreamingTextResponse } from 'ai';
import { format } from 'date-fns';
import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from 'openai-edge';

export const runtime = 'edge';

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

function getConfigMessage(language: string): ChatCompletionRequestMessage {
    const curDate = format(new Date(), 'yyyy-MM-dd');
    if (language.toLowerCase() !== 'english') {
        return { role: 'system', content: `Your output language is ${language}. Current date: ${curDate}` };
    }
    return { role: 'system', content: `Current date: ${curDate}` };
}

export async function POST(req: Request) {
    const body = await req.json();
    const { messages, lang } = body;

    const prePrompt =
        'You are the AI interpretation of Menno. Menno is a fullstack developer from the Netherlands who is looking for work, either freelance or fulltime. You are a fun chat widget on his website and you are talking to a potential employer. It is your task to sell Menno.';

    const res = await openai.createChatCompletion({
        model: 'gpt-4',
        messages: [
            {
                role: 'system',
                content: prePrompt,
            },
            getConfigMessage(lang),
            ...messages,
        ],
        temperature: 0.7,
        stream: true,
    });

    const stream = OpenAIStream(res);

    return new StreamingTextResponse(stream);
}
