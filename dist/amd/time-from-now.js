/*can-stache-moment@3.0.1#time-from-now*/
define(function (require, exports, module) {
    var moment = require('moment');
    module.exports = function mTimeFromNow(date, noSuffix) {
        var d = new Date(date.isComputed ? date() : date);
        return moment(d).fromNow(noSuffix);
    };
});