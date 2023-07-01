"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactRoutes = void 0;
const schema_1 = require("../schema");
const createBlocks_1 = require("../slack/createBlocks");
const sendSlackMessage_1 = require("../slack/sendSlackMessage");
const trpc_1 = require("../trpc");
exports.contactRoutes = (0, trpc_1.router)({
    submit: trpc_1.publicProcedure.input(schema_1.contactSchema).mutation(({ input }) => __awaiter(void 0, void 0, void 0, function* () {
        const subject = 'New contact submission';
        const blocks = (0, createBlocks_1.createBlocks)(subject, input);
        const res = yield (0, sendSlackMessage_1.sendInternalSlackMessage)(blocks, subject);
        if (res.ok) {
            return { success: true };
        }
        throw new Error('Unable to process request. Please email me at menno.c.jager@gmail.com');
    })),
    test: trpc_1.publicProcedure.query(() => {
        return { success: true };
    }),
});
// test
