/*can-stache-moment@1.0.0#registerHelper/mTimeFromNow*/
require('jquery');
require('can');
var mTimeFromNow = require('../mTimeFromNow.js');
can.stache.registerHelper('mTimeFromNow', mTimeFromNow);