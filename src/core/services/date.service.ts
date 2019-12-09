import moment from 'moment';
import 'moment/locale/ru';

export class DateService {
    readonly DATE_INVALID_MESSAGE = 'Date has wrong format';
    readonly DATE_DEFAULT_FORMAT = 'DD.MM.YYYY';

    isDateValid(date: Date): boolean {
        return moment(date).isValid();
    }

    defaultDateFormat(date: Date): string {
        if (!this.isDateValid(date)) {
            return `${this.DATE_INVALID_MESSAGE}: ${date.toString()}`;
        }

        return moment(date).calendar();
    }
}