require('jquery');
require('can');
var mFormatDate = require('../mFormatDate');

can.stache.registerHelper('mFormatDate', mFormatDate);
