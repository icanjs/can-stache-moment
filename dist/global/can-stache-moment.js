/*[global-shim-start]*/
(function (exports, global){
	var origDefine = global.define;

	var get = function(name){
		var parts = name.split("."),
			cur = global,
			i;
		for(i = 0 ; i < parts.length; i++){
			if(!cur) {
				break;
			}
			cur = cur[parts[i]];
		}
		return cur;
	};
	var modules = (global.define && global.define.modules) ||
		(global._define && global._define.modules) || {};
	var ourDefine = global.define = function(moduleName, deps, callback){
		var module;
		if(typeof deps === "function") {
			callback = deps;
			deps = [];
		}
		var args = [],
			i;
		for(i =0; i < deps.length; i++) {
			args.push( exports[deps[i]] ? get(exports[deps[i]]) : ( modules[deps[i]] || get(deps[i]) )  );
		}
		// CJS has no dependencies but 3 callback arguments
		if(!deps.length && callback.length) {
			module = { exports: {} };
			var require = function(name) {
				return exports[name] ? get(exports[name]) : modules[name];
			};
			args.push(require, module.exports, module);
		}
		// Babel uses the exports and module object.
		else if(!args[0] && deps[0] === "exports") {
			module = { exports: {} };
			args[0] = module.exports;
			if(deps[1] === "module") {
				args[1] = module;
			}
		}

		global.define = origDefine;
		var result = callback ? callback.apply(null, args) : undefined;
		global.define = ourDefine;

		// Favor CJS module.exports over the return value
		modules[moduleName] = module && module.exports ? module.exports : result;
	};
	global.define.orig = origDefine;
	global.define.modules = modules;
	global.define.amd = true;
	global.System = {
		define: function(__name, __code){
			global.define = origDefine;
			eval("(function() { " + __code + " \n }).call(global);");
			global.define = ourDefine;
		},
		orig: global.System
	};
})({},window)
/*can-stache-moment@3.0.1#calendar*/
define('can-stache-moment/calendar', function (require, exports, module) {
    var moment = require('moment');
    module.exports = function mCalendar(refDate) {
        var d = new Date();
        if (typeof refDate !== undefined) {
            d = refDate.isComputed ? new Date(refDate()) : new Date(refDate);
        }
        return moment().calendar(d);
    };
});
/*can-stache-moment@3.0.1#format-date*/
define('can-stache-moment/format-date', function (require, exports, module) {
    var moment = require('moment');
    module.exports = function mFormatDate(date, format) {
        var d = new Date(date.isComputed ? date() : date);
        return moment(d).format(format);
    };
});
/*can-stache-moment@3.0.1#time-from-now*/
define('can-stache-moment/time-from-now', function (require, exports, module) {
    var moment = require('moment');
    module.exports = function mTimeFromNow(date, noSuffix) {
        var d = new Date(date.isComputed ? date() : date);
        return moment(d).fromNow(noSuffix);
    };
});
/*can-stache-moment@3.0.1#can-stache-moment*/
define('can-stache-moment', [
    'exports',
    'can-stache',
    'can-stache-moment/calendar',
    'can-stache-moment/format-date',
    'can-stache-moment/time-from-now'
], function (exports, _canStache, _calendar, _formatDate, _timeFromNow) {
    'use strict';
    var _interopRequire = function (obj) {
        return obj && obj.__esModule ? obj['default'] : obj;
    };
    var stache = _interopRequire(_canStache);
    var calendar = _interopRequire(_calendar);
    var formatDate = _interopRequire(_formatDate);
    var timeFromNow = _interopRequire(_timeFromNow);
    stache.registerHelper('mCalendar', calendar);
    stache.registerHelper('mFormatDate', formatDate);
    stache.registerHelper('mTimeFromNow', timeFromNow);
});
/*[global-shim-end]*/
(function (){
	window._define = window.define;
	window.define = window.define.orig;
	window.System = window.System.orig;
})();