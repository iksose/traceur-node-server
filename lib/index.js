"use strict";
var __moduleName = "lib/index";
var $__lib_47_module_46_js__;
var facePalmFactor = ($__lib_47_module_46_js__ = require("./module.js"), $__lib_47_module_46_js__ && $__lib_47_module_46_js__.__esModule && $__lib_47_module_46_js__ || {default: $__lib_47_module_46_js__}).facePalmFactor;
var co = require('co');
console.log(facePalmFactor(10, 3));
co(function*() {
  var result = yield Promise.resolve(true);
  return result;
}).then(function(value) {
  console.log(value);
}, function(err) {
  console.error(err.stack);
});

//# sourceMappingURL=index.map
//# sourceURL=src/index.js