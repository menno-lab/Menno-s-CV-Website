'use client';

import { initializeGoogleAnalytics, initializeMixpanel, sendPageViewEvent } from 'analytics';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export function Analytics() {
    const path = usePathname();

    useEffect(() => {
        initializeGoogleAnalytics(process.env.NEXT_PUBLIC_GA_PROPERTY_ID!);
        initializeMixpanel(process.env.NEXT_PUBLIC_MIXPANEL_PROJECT_TOKEN!);
    }, []);

    useEffect(() => {
        sendPageViewEvent(path);
    }, [path]);

    return null;
}
