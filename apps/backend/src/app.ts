import { awsLambdaRequestHandler } from '@trpc/server/adapters/aws-lambda';
import type { CreateAWSLambdaContextOptions } from '@trpc/server/adapters/aws-lambda';
import type { APIGatewayProxyEvent } from 'aws-lambda';
import { contactRoutes } from './routes/contactRoutes';
import { router } from './trpc';

function createContext({ event }: CreateAWSLambdaContextOptions<APIGatewayProxyEvent>) {
    return {
        event: event,
        apiVersion: (event as { version?: string }).version ?? '1.0',
        user: event.headers['x-user'],
    };
}

const appRouter = router({
    contact: contactRoutes,
});

export type AppRouter = typeof appRouter;

export const handler = awsLambdaRequestHandler({
    router: appRouter,
    createContext,
});
