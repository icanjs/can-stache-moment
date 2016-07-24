/*can-stache-moment@3.0.1#can-stache-moment*/
define([
    'exports',
    'can-stache',
    './calendar',
    './format-date',
    './time-from-now'
], function (exports, _canStache, _calendar, _formatDate, _timeFromNow) {
    'use strict';
    var _interopRequire = function (obj) {
        return obj && obj.__esModule ? obj['default'] : obj;
    };
    var stache = _interopRequire(_canStache);
    var calendar = _interopRequire(_calendar);
    var formatDate = _interopRequire(_formatDate);
    var timeFromNow = _interopRequire(_timeFromNow);
    stache.registerHelper('mCalendar', calendar);
    stache.registerHelper('mFormatDate', formatDate);
    stache.registerHelper('mTimeFromNow', timeFromNow);
});