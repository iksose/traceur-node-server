"use strict";
"use strict";
Object.defineProperties(exports, {
  fpRatio: {get: function() {
      return fpRatio;
    }},
  facePalmFactor: {get: function() {
      return facePalmFactor;
    }},
  __esModule: {value: true}
});
var fpRatio = Math.PI * 9.23 / 0.7734;
function facePalmFactor(embarrassmentLevel, handSize) {
  return embarrassmentLevel / handSize * fpRatio;
}
//# sourceURL=lib/src/module.js