/*can-stache-moment@1.0.0#can-stache-moment*/
define(function (require, exports, module) {
    module.exports = {
        mFormatDate: require('./registerHelper/mFormatDate'),
        mTimeFromNow: require('./registerHelper/mTimeFromNow'),
        mCalendar: require('./registerHelper/mCalendar')
    };
});