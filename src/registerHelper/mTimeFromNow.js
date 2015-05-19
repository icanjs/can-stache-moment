require('jquery');
require('can');
var mTimeFromNow = require('../mTimeFromNow');

can.stache.registerHelper('mTimeFromNow', mTimeFromNow);
