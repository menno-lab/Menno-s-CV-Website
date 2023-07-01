import { inferAsyncReturnType, initTRPC } from '@trpc/server';
import { CreateAWSLambdaContextOptions } from '@trpc/server/adapters/aws-lambda';
import { APIGatewayProxyEvent } from 'aws-lambda';

export function createContext({ event }: CreateAWSLambdaContextOptions<APIGatewayProxyEvent>) {
    return {
        event: event,
        apiVersion: (event as { version?: string }).version ?? '1.0',
        user: event.headers['x-user'],
    };
}

type Context = inferAsyncReturnType<typeof createContext>;
const t = initTRPC.context<Context>().create();

export const middleware = t.middleware;
export const router = t.router;
export const publicProcedure = t.procedure;
