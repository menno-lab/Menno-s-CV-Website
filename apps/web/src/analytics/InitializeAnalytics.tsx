'use client';

import { initializeGoogleAnalytics, initializeMixpanel, sendPageViewEvent } from 'analytics';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useDefaultParams } from './hooks/useDefaultParams';

export function InitializeAnalytics() {
    const path = usePathname();
    const defaultParams = useDefaultParams();

    useEffect(() => {
        initializeGoogleAnalytics(process.env.NEXT_PUBLIC_GA_PROPERTY_ID!);
        initializeMixpanel(process.env.NEXT_PUBLIC_MIXPANEL_PROJECT_TOKEN!);
    }, []);

    useEffect(() => {
        sendPageViewEvent(path, defaultParams);
    }, [path]);

    return null;
}
