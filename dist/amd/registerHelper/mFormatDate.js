/*can-stache-moment@1.0.0#registerHelper/mFormatDate*/
define(function (require, exports, module) {
    require('jquery');
    require('can');
    var mFormatDate = require('../mFormatDate');
    can.stache.registerHelper('mFormatDate', mFormatDate);
});