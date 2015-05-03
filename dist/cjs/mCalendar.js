/*can-stache-moment@0.2.1#mCalendar*/
var moment = require('moment');
module.exports = function mCalendar(refDate) {
    return refDate ? moment().calendar(refDate) : moment().calendar();
};