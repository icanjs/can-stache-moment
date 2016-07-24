import stache from 'can-stache';
import calendar from './calendar';
import formatDate from './format-date';
import timeFromNow from './time-from-now';

stache.registerHelper('mCalendar', calendar);
stache.registerHelper('mFormatDate', formatDate);
stache.registerHelper('mTimeFromNow', timeFromNow);
