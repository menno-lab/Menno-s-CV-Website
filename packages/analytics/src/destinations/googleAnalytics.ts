import ReactGA from 'react-ga4';

export function initializeGoogleAnalytics(propertyId: string) {
    ReactGA.initialize(propertyId);
}

export function sendGaPageView(path: string, params: Record<string, string>) {
    ReactGA.send({ hitType: 'pageview', path, params });
}

export function sendGaEvent(eventName: string, params: Record<string, string>) {
    ReactGA.event(eventName, params);
}
