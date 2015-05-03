/*can-stache-moment@0.2.1#mTimeFromNow*/
var moment = require('moment');
module.exports = function mTimeFromNow(date, noSuffix) {
    var d = moment(date());
    return d.fromNow(noSuffix);
};