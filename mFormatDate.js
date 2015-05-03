var moment = require('moment');

module.exports = function mFormatDate(date, format){
	var d = moment(date());
	return d.format(format);
};