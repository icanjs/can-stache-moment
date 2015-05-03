import 'jquery';
import 'can';
import {moment} from 'moment';

export function mFormatDate(date, format){
	var d = moment(date());
	console.log(d);
	return d.format(format);
}