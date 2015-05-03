/*can-stache-moment@0.2.1#mFormatDate*/
define(function (require, exports, module) {
    var moment = require('moment');
    module.exports = function mFormatDate(date, format) {
        var d = moment(date());
        return d.format(format);
    };
});