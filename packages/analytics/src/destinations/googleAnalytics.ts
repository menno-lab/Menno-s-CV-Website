import ReactGA from 'react-ga4';

export function initializeGoogleAnalytics(propertyId: string) {
    ReactGA.initialize(propertyId);
}

export function sendGaPageView(path: string) {
    ReactGA.send({ hitType: 'pageview', path });
}

export function sendGaEvent(eventName: string, params: Record<string, string>) {
    ReactGA.event(eventName, params);
}
