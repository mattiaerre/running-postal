var Promise = require('./promise.js');

var promise = new Promise();

setTimeout(function () {
    promise.resolve();
}, 1000);

setTimeout(function () {
    promise.done(function (data) {
        console.log('handler added after deferred object is done');
    });
}, 2000);

promise.done(function (data) {
    console.log('deferred object has completed');
});