import 'jquery';
import 'can';
import 'moment';


export function registerHelper(){

	can.stache.registerHelper('mFormatDate', function(str, options){
		console.log(options);
		return str;
	});

}