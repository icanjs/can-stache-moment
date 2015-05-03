import 'jquery';
import 'can';
import {moment} from 'moment';

export function mFormatDate(date, format){
	console.log(date);
	console.log(format);
	var d = moment(date);
	return d.format(format);
}