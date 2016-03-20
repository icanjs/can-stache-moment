/*can-stache-moment@1.0.0#mFormatDate*/
var moment = require('moment');
module.exports = function mFormatDate(date, format) {
    var d = new Date(date.isComputed ? date() : date);
    return moment(d).format(format);
};