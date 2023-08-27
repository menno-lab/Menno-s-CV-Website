import { isToday, format } from 'date-fns';

export function formatDate(date: Date) {
    if (isToday(date)) {
        return format(date, 'HH:mm');
    }
    return format(date, 'd MMMM - HH:mm');
}
