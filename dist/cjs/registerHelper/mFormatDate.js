/*can-stache-moment@1.0.0#registerHelper/mFormatDate*/
require('jquery');
require('can');
var mFormatDate = require('../mFormatDate.js');
can.stache.registerHelper('mFormatDate', mFormatDate);