import { inferAsyncReturnType, initTRPC } from '@trpc/server';
import { awsLambdaRequestHandler } from '@trpc/server/adapters/aws-lambda';
import type { CreateAWSLambdaContextOptions } from '@trpc/server/adapters/aws-lambda';
import type { APIGatewayProxyEvent } from 'aws-lambda';
import { contactRoutes } from './routes/contactRoutes';

function createContext({ event, context }: CreateAWSLambdaContextOptions<APIGatewayProxyEvent>) {
    return {
        event: event,
        apiVersion: (event as { version?: string }).version ?? '1.0',
        user: event.headers['x-user'],
    };
}
type Context = inferAsyncReturnType<typeof createContext>;

const t = initTRPC.context<Context>().create();

const publicProcedure = t.procedure;
const router = t.router;

const appRouter = router({
    greet: publicProcedure.query(() => {
        return `Greetings, user`;
    }),
    contact: contactRoutes,
});

export type AppRouter = typeof appRouter;

export const handler = awsLambdaRequestHandler({
    router: appRouter,
    createContext,
    responseMeta() {
        return {
            headers: {
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
            },
        };
    },
});
