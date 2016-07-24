/*can-stache-moment@3.0.1#can-stache-moment*/
'use strict';
var _interopRequire = function (obj) {
    return obj && obj.__esModule ? obj['default'] : obj;
};
var stache = _interopRequire(require('can-stache'));
var calendar = _interopRequire(require('./calendar.js'));
var formatDate = _interopRequire(require('./format-date.js'));
var timeFromNow = _interopRequire(require('./time-from-now.js'));
stache.registerHelper('mCalendar', calendar);
stache.registerHelper('mFormatDate', formatDate);
stache.registerHelper('mTimeFromNow', timeFromNow);