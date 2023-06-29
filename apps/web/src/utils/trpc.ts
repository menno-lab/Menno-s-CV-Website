import { createTRPCReact, inferReactQueryProcedureOptions } from '@trpc/react-query';
import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import type { AppRouter } from 'backend';

export type ReactQueryOptions = inferReactQueryProcedureOptions<AppRouter>;
export type RouterInput = inferRouterInputs<AppRouter>;
export type RouterOutput = inferRouterOutputs<AppRouter>;

type Temp = RouterInput['contact']['create'];

type Test = RouterOutput['contact'];

export const trpc = createTRPCReact<AppRouter>();
