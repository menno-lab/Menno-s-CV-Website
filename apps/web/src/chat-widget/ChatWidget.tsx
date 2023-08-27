import { useTranslation } from '@/i18n';
import React from 'react';
import { ChatCopies } from './types';
import { FloatingActionButton } from './components/FloatingActionButton';
import { getRandomItemFromArray } from 'utils';
import { Language } from '@/i18n/types';

interface ChatWidgetProps {
    lang: Language;
}

export async function ChatWidget({ lang }: ChatWidgetProps) {
    const { t } = await useTranslation(lang);
    const copies = t<ChatCopies>('chat');
    return <FloatingActionButton copies={copies} firstMessage={getRandomItemFromArray(t('chat.firstMessageOptions'))} />;
}
