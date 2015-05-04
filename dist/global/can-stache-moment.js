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
		// Babel uses only the exports objet
		else if(!args[0] && deps[0] === "exports") {
			module = { exports: {} };
			args[0] = module.exports;
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
/*can-stache-moment@0.3.3#mFormatDate*/
define('can-stache-moment/mFormatDate', function (require, exports, module) {
    var moment = require('moment');
    module.exports = function mFormatDate(date, format) {
        var d = new Date(date.isComputed ? date() : date);
        return moment(d).format(format);
    };
});
/*can-stache-moment@0.3.3#mTimeFromNow*/
define('can-stache-moment/mTimeFromNow', function (require, exports, module) {
    var moment = require('moment');
    module.exports = function mTimeFromNow(date, noSuffix) {
        var d = new Date(date.isComputed ? date() : date);
        return moment(d).fromNow(noSuffix);
    };
});
/*can-stache-moment@0.3.3#mCalendar*/
define('can-stache-moment/mCalendar', function (require, exports, module) {
    var moment = require('moment');
    module.exports = function mCalendar(refDate) {
        var d = new Date();
        if (typeof refDate !== undefined) {
            d = refDate.isComputed ? new Date(refDate()) : new Date(refDate);
        }
        return moment().calendar(d);
    };
});
/*can-stache-moment@0.3.3#can-stache-moment*/
define('can-stache-moment', function (require, exports, module) {
    module.exports = {
        mFormatDate: require('can-stache-moment/mFormatDate'),
        mTimeFromNow: require('can-stache-moment/mTimeFromNow'),
        mCalendar: require('can-stache-moment/mCalendar')
    };
});
/*[global-shim-end]*/
(function (){
	window._define = window.define;
	window.define = window.define.orig;
	window.System = window.System.orig;
})();