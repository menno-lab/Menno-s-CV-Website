import { CreateAWSLambdaContextOptions, awsLambdaRequestHandler } from '@trpc/server/adapters/aws-lambda';
import { APIGatewayProxyEvent } from 'aws-lambda';
import { contactRoutes } from './routes/contactRoutes';
import { router } from './trpc';

function createContext({ event, context }: CreateAWSLambdaContextOptions<APIGatewayProxyEvent>) {
    return {
        event: event,
        apiVersion: (event as { version?: string }).version ?? '1.0',
        user: event.headers['x-user'],
    };
}

const appRouter = router({
    contact: contactRoutes,
});

export const handler = awsLambdaRequestHandler({
    router: appRouter,
    createContext,
});

export type AppRouter = typeof appRouter;
