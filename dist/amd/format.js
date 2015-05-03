/*can-stache-moment@0.0.1#format*/
define([
    'exports',
    'jquery',
    'can',
    'moment'
], function (exports, _jquery, _can, _moment) {
    'use strict';
    exports.registerHelper = registerHelper;
    var moment = _moment.moment;
    function registerHelper() {
        can.stache.registerHelper('mFormatDate', function (date, format) {
            console.log(date);
            console.log(format);
            var d = moment(date);
            return d.format(format);
        });
    }
    Object.defineProperty(exports, '__esModule', { value: true });
});