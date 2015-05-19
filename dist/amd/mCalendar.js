/*can-stache-moment@0.3.3#mCalendar*/
define(function (require, exports, module) {
    var moment = require('moment');
    module.exports = function mCalendar(refDate) {
        var d = new Date();
        if (typeof refDate !== undefined) {
            d = refDate.isComputed ? new Date(refDate()) : new Date(refDate);
        }
        return moment().calendar(d);
    };
});