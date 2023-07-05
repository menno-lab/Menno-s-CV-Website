import { sendEvent } from '../utils';
import { useDefaultParams } from './useDefaultParams';

export function useContactEvents() {
    const defaultParams = useDefaultParams();

    function contactFormSubmitted() {
        sendEvent('contact_form_submitted', { ...defaultParams });
    }

    return {
        contactFormSubmitted,
    };
}
