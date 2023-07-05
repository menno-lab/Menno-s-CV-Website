import mixpanel from 'mixpanel-browser';

export function initializeMixpanel(token: string) {
    mixpanel.init(token);
}

export function sendMixpanelPageview(page: string) {
    mixpanel.track_pageview({ page });
}

export function sendMixpanelEvent(eventName: string, params: Record<string, string>) {
    mixpanel.track(eventName, params);
}
