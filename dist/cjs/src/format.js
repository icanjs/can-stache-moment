/*src/format*/
'use strict';
exports.registerHelper = registerHelper;
require('jquery');
require('can');
var moment = require('moment').moment;
function registerHelper() {
    can.stache.registerHelper('mFormatDate', function (date, format) {
        console.log(date);
        console.log(format);
        var d = moment(date);
        return d.format(format);
    });
}
Object.defineProperty(exports, '__esModule', { value: true });