/*can-stache-moment@1.0.0#mTimeFromNow*/
var moment = require('moment');
module.exports = function mTimeFromNow(date, noSuffix) {
    var d = new Date(date.isComputed ? date() : date);
    return moment(d).fromNow(noSuffix);
};