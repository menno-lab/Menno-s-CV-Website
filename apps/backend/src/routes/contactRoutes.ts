import { createSlackBlocks } from '../services/slack/createSlackBlocks';
import { contactSchema } from '../services/slack/schema';
import { sendInternalSlackMessage } from '../services/slack/sendSlackMessage';
import { publicProcedure, router } from '../trpc';

export const contactRoutes = router({
    submit: publicProcedure.input(contactSchema).mutation(async ({ input }) => {
        const subject = 'New contact submission from personal website';
        const blocks = createSlackBlocks(subject, input);
        const res = await sendInternalSlackMessage(blocks, subject);
        if (res.ok) {
            return { success: true };
        }
        throw new Error('Unable to process request. Please email me at menno.c.jager@gmail.com');
    }),
});
