/*src/format*/
'use strict';
exports.registerHelper = registerHelper;
require('jquery');
require('can');
require('moment');
function registerHelper() {
    can.stache.registerHelper('mFormatDate', function (str, options) {
        console.log(options);
        return str;
    });
}
Object.defineProperty(exports, '__esModule', { value: true });