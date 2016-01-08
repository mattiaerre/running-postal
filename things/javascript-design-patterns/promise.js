var Promise = function () {
    var data,
        done = [],
        fail = [],
        status = 'progress';

    this.done = function (fn) {
        done.push(fn);

        if (status === 'done') {
            fn(data);
        }

        return this;
    };

    this.failed = function (fn) {
        fail.push(fn);

        if (status === 'failed') {
            fn(data);
        }

        return this;
    };

    this.resolve = function (result) {
        if (status !== 'progress') {
            throw 'promise has already completed with a status of ' + status + ' and cannot be completed';
        }

        status = 'done';
        data = result;

        for (var i = 0; i < done.length; i++) {
            done[i](data);
        }

        return this;
    };

    this.fail = function (reason) {
        if (status !== 'progress') {
            throw 'promise has already completed with a status of ' + status + ' and cannot be completed';
        }

        status = 'done';
        data = reason;

        for (var i = 0; i < fail.length; i++) {
            fail[i](data);
        }

        return this;
    };
}

module.exports = Promise;