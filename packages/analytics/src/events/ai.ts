import { sendEvent } from '../eventManager';
import { DefaultParams } from '../types';

export function openChatWindow(params: DefaultParams) {
    sendEvent('CHAT_WINDOW_OPENED', { ...params });
}

export function closeChatWindow(params: DefaultParams) {
    sendEvent('CHAT_WINDOW_CLOSED', { ...params });
}

export function chatMessageSent(params: DefaultParams, message: string) {
    sendEvent('CHAT_MESSAGE_SENT', { ...params, message });
}
