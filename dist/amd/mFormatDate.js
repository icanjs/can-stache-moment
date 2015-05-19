/*can-stache-moment@0.3.3#mFormatDate*/
define(function (require, exports, module) {
    var moment = require('moment');
    module.exports = function mFormatDate(date, format) {
        var d = new Date(date.isComputed ? date() : date);
        return moment(d).format(format);
    };
});