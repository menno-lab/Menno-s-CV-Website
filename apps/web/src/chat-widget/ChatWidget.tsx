import { useTranslation } from '@/i18n';
import React from 'react';
import { ChatCopies } from './types';
import { getRandomItemFromArray } from 'utils';
import { Language } from '@/i18n/types';
import { ChatPopover } from './components/ChatPopover';

interface ChatWidgetProps {
    lang: Language;
}

export async function ChatWidget({ lang }: ChatWidgetProps) {
    const { t } = await useTranslation(lang);
    const copies = t<ChatCopies>('chat');
    return <ChatPopover copies={copies} firstMessage={getRandomItemFromArray(t('chat.firstMessageOptions'))} />;
}
