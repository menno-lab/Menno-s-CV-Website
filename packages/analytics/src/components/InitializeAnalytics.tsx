import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { initializeGoogleAnalytics, initializeMixpanel } from '../destinations';
import { useDefaultParams } from '../hooks/useDefaultParams';
import { sendPageViewEvent } from '../utils';

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
