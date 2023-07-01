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
exports.sendInternalSlackMessage = void 0;
const web_api_1 = require("@slack/web-api");
function sendInternalSlackMessage(blocks, text) {
    return __awaiter(this, void 0, void 0, function* () {
        const token = process.env.SLACK_INTERNAL_TOKEN;
        const web = new web_api_1.WebClient(token);
        return yield web.chat.postMessage({
            channel: 'contact-submissions',
            blocks,
            text,
        });
    });
}
exports.sendInternalSlackMessage = sendInternalSlackMessage;
