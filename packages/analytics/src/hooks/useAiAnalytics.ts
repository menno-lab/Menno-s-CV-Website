import { sendEvent } from '../utils';
import { useDefaultParams } from './useDefaultParams';

export function useAiAnalytics() {
    const defaultParams = useDefaultParams();

    function openChatWindow() {
        sendEvent('chat_window_opened', { ...defaultParams });
    }

    function closeChatWindow() {
        sendEvent('chat_window_closed', { ...defaultParams });
    }

    function chatMessageSent(message: string) {
        sendEvent('chat_message_sent', { ...defaultParams, message });
    }

    function chatMessageReceived(message: string) {
        sendEvent('chat_message_received', { ...defaultParams, message });
    }

    return {
        openChatWindow,
        closeChatWindow,
        chatMessageSent,
        chatMessageReceived,
    };
}
