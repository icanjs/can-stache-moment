/*can-stache-moment@1.0.0#registerHelper/mCalendar*/
define(function (require, exports, module) {
    require('jquery');
    require('can');
    var mCalendar = require('../mCalendar');
    can.stache.registerHelper('mCalendar', mCalendar);
});