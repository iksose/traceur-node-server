import {
    facePalmFactor
}
from './module.js';
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
