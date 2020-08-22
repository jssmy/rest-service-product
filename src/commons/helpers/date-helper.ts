import * as moment from 'moment';
export class DateHelper {
    public static current() {
        return moment().toDate();
    }
}