import { sendGaEvent, sendGaPageView, sendMixpanelEvent, sendMixpanelPageview } from '../destinations';
import { AnalyticsEvent } from '../types';

export function sendPageViewEvent(path: string, params: Record<string, any>) {
    if (process.env.NODE_ENV === 'development') {
        console.log('Faux page view event', path);
        return;
    }
    sendMixpanelPageview(path, params);
    sendGaPageView(path, params);
}

export function sendEvent(eventName: AnalyticsEvent, params: Record<string, any>) {
    if (process.env.NODE_ENV === 'development') {
        console.log('Faux event', eventName, params);
        return;
    }
    sendMixpanelEvent(eventName, params);
    sendGaEvent(eventName, params);
}
