/**
 * Import this file if you want to import all of the helpers at once,
 * but only use them explicitly in a component:
 *
 * ```
 * import momentHelpers from 'can-stache-moment';
 *
 * can.Component.extend({
 * 	 helpers:{
 *     formatDate: helpers.mFormatDate,
 *     timeFromNow: helpers.mTimeFromNow
 *   }
 * });
 * ```
 */
module.exports = {
	mFormatDate: require('./mFormatDate'),
	mTimeFromNow: require('./mTimeFromNow'),
	mCalendar: require('./mCalendar')
};
