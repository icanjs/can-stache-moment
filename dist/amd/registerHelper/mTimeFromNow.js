/*can-stache-moment@1.0.0#registerHelper/mTimeFromNow*/
define(function (require, exports, module) {
    require('jquery');
    require('can');
    var mTimeFromNow = require('../mTimeFromNow');
    can.stache.registerHelper('mTimeFromNow', mTimeFromNow);
});