import { awsLambdaRequestHandler } from '@trpc/server/adapters/aws-lambda';
import { contactRoutes } from './routes/contactRoutes';
import { createContext, router } from './trpc';

const appRouter = router({
    contact: contactRoutes,
});

export type AppRouter = typeof appRouter;

export const handler = awsLambdaRequestHandler({
    router: appRouter,
    createContext,
    responseMeta() {
        return {
            status: 200,
            headers: {
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
            },
        };
    },
});
