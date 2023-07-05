import { sendGaEvent, sendGaPageView } from './destinations/googleAnalytics';
import { sendMixpanelEvent, sendMixpanelPageview } from './destinations/mixpanel';

export function sendPageViewEvent(path: string) {
    if (process.env.NODE_ENV === 'development') {
        return console.log('Sending page view event', path);
    }
    sendMixpanelPageview(path);
    sendGaPageView(path);
}

export function sendEvent(eventName: string, params: Record<string, any>) {
    sendMixpanelEvent(eventName, params);
    sendGaEvent(eventName, params);
}
