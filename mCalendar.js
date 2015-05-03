var moment = require('moment');
/**
 * Calendar time displays time relative to given referenceTime
 * (defaults to now), but slightly differently than moment#fromNow.
 *
 * moment#calendar will format a date with different strings depending
 * on how close to referenceTime's date (today by default) the date is.
 *
 * See http://momentjs.com/docs/#/displaying/calendar-time/
 *
 * @param  {Date} refDate Change to another reference time. In other words,
 *                        reference a time other than now.
 * @return {String}       A Calendar Time string.
 *
 */
module.exports = function mCalendar(refDate){
	return refDate ? moment().calendar(refDate) : moment().calendar();
};