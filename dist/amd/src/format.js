/*src/format*/
define([
    'exports',
    'jquery',
    'can',
    'moment'
], function (exports, _jquery, _can, _moment) {
    'use strict';
    exports.registerHelper = registerHelper;
    function registerHelper() {
        can.stache.registerHelper('mFormatDate', function (str, options) {
            console.log(options);
            return str;
        });
    }
    Object.defineProperty(exports, '__esModule', { value: true });
});