/*can-stache-moment@0.3.1#mCalendar*/
define(function (require, exports, module) {
    var moment = require('moment');
    module.exports = function mCalendar(refDate) {
        return refDate ? moment().calendar(refDate) : moment().calendar();
    };
});