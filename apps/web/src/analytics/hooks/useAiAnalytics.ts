'use client';

import { sendEvent } from 'analytics';
import { useDefaultParams } from './useDefaultParams';

export function useAiAnalytics() {
    const defaultParams = useDefaultParams();

    function openChatWindow() {
        sendEvent('CHAT_WINDOW_OPENED', { ...defaultParams });
    }

    function closeChatWindow() {
        sendEvent('CHAT_WINDOW_CLOSED', { ...defaultParams });
    }

    function chatMessageSent(message: string) {
        sendEvent('CHAT_MESSAGE_SENT', { ...defaultParams, message });
    }

    function chatMessageReceived(message: string) {
        sendEvent('CHAT_MESSAGE_RECEIVED', { ...defaultParams, message });
    }

    return {
        openChatWindow,
        closeChatWindow,
        chatMessageSent,
        chatMessageReceived,
    };
}
