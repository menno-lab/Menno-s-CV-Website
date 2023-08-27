import { useTranslation } from '@/i18n';
import React from 'react';
import { ChatCopies } from './types';
import { FloatingActionButton } from './components/FloatingActionButton';
import { getRandomItemFromArray } from 'utils';

export async function ChatWidget() {
    const { t } = await useTranslation();
    const copies = t<ChatCopies>('chat');
    return <FloatingActionButton copies={copies} firstMessage={getRandomItemFromArray(t('chat.firstMessageOptions'))} />;
}
