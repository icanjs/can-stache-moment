var moment = require('moment');

module.exports = function mTimeFromNow(date, noSuffix){
	var d = moment(date());
	return d.fromNow(noSuffix);
};