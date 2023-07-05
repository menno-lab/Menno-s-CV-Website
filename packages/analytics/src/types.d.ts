export interface DefaultParams {
    breakPoint: string;
    language: string;
    theme: string;
}

const AI_EVENTS = ['chat_window_opened', 'chat_window_closed', 'chat_message_sent', 'chat_message_received'] as const;
const CUSTOMIZATION_EVENTS = ['language_switched', 'theme_switched'] as const;

type AiEvent = (typeof AI_EVENTS)[number];
type CustomizationEvent = (typeof CUSTOMIZATION_EVENTS)[number];

export type AnalyticsEvent = AiEvent | CustomizationEvent;
