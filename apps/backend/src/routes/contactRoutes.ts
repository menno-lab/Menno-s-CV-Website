import { contactSchema } from '../schema';
import { createBlocks } from '../slack/createBlocks';
import { sendInternalSlackMessage } from '../slack/sendSlackMessage';
import { publicProcedure, router } from '../trpc';

export const contactRoutes = router({
    submit: publicProcedure.input(contactSchema).mutation(async ({ input }) => {
        const subject = 'New contact submission';
        const blocks = createBlocks(subject, input);
        const res = await sendInternalSlackMessage(blocks, subject);
        if (res.ok) {
            return { success: true };
        }
        throw new Error('Unable to process request. Please email me at menno.c.jager@gmail.com');
    }),
    test: publicProcedure.query(() => {
        return { success: true };
    }),
});
