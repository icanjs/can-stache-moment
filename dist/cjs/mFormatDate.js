/*can-stache-moment@0.0.2#mFormatDate*/
var moment = require('moment');
module.exports = function mFormatDate(date, format) {
    var d = moment(date());
    return d.format(format);
};