import { sendGaEvent, sendGaPageView } from './destinations/googleAnalytics';
import { sendMixpanelEvent, sendMixpanelPageview } from './destinations/mixpanel';

export function sendPageViewEvent(path: string, params: Record<string, any>) {
    if (process.env.NODE_ENV === 'development') {
        console.log('Faux page view event', path);
        return;
    }
    sendMixpanelPageview(path, params);
    sendGaPageView(path, params);
}

export function sendEvent(eventName: string, params: Record<string, any>) {
    if (process.env.NODE_ENV === 'development') {
        console.log('Faux event', eventName, params);
        return;
    }
    sendMixpanelEvent(eventName, params);
    sendGaEvent(eventName, params);
}
