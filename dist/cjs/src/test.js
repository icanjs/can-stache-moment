/*src/test*/
'use strict';
exports.square = square;
exports.diag = diag;
var sqrt = exports.sqrt = Math.sqrt;
function square(x) {
    return x * x;
}
function diag(x, y) {
    return sqrt(square(x) + square(y));
}
Object.defineProperty(exports, '__esModule', { value: true });