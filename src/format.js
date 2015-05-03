import 'jquery';
import 'can';
import {moment} from 'moment';


export function registerHelper(){

	can.stache.registerHelper('mFormatDate', function(date, format){
		console.log(date);
		console.log(format);
		var d = moment(date);
		return d.format(format);
	});

}