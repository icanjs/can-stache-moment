/*can-stache-moment@0.3.4#mTimeFromNow*/
define(function (require, exports, module) {
    var moment = require('moment');
    module.exports = function mTimeFromNow(date, noSuffix) {
        var d = new Date(date.isComputed ? date() : date);
        return moment(d).fromNow(noSuffix);
    };
});