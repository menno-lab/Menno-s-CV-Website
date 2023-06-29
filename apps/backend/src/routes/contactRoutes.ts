import { contactSchema } from '../schema';
import { publicProcedure, router } from '../trpc';

export const contactRoutes = router({
    submit: publicProcedure.input(contactSchema).mutation(async ({ ctx, input }) => {
        return { hello: true };
    }),
});
