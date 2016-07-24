/*can-stache-moment@3.0.1#format-date*/
var moment = require('moment');
module.exports = function mFormatDate(date, format) {
    var d = new Date(date.isComputed ? date() : date);
    return moment(d).format(format);
};