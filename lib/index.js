"use strict";
var handle = function (handlers) {
    process.stdin.resume();
    process.stdin.on('data', function (d) {
        process.stdout.write(handlers(d.toString()));
    });
    process.stdout.on('error', function errorHandler(err) {
        if (err.code === 'EPIPE') {
            // eslint-disable-next-line no-process-exit
            return process.exit();
        }
        if (process.stdout.listeners('error').length <= 1) {
            process.stdout.removeAllListeners();
            process.stdout.emit('error', err);
            process.stdout.on('error', errorHandler);
        }
    });
};
// eslint-disable-next-line no-eval
handle(eval(process.argv[2]) || (function (a) { return a; }));
