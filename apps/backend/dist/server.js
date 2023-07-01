"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const server_1 = require("@trpc/server");
const aws_lambda_1 = require("@trpc/server/adapters/aws-lambda");
function createContext({ event, context }) {
    var _a;
    return {
        event: event,
        apiVersion: (_a = event.version) !== null && _a !== void 0 ? _a : '1.0',
        user: event.headers['x-user'],
    };
}
const t = server_1.initTRPC.context().create();
const publicProcedure = t.procedure;
const router = t.router;
const appRouter = router({
    greet: publicProcedure.query(() => {
        return `Greetings, user`;
    }),
});
exports.handler = (0, aws_lambda_1.awsLambdaRequestHandler)({
    router: appRouter,
    createContext,
});
