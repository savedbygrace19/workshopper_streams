"use strict"
var concat = require('concat-stream');

let write = process.stdin.pipe(concat(function(buffer) {
    process.stdout.write(buffer.toString().split('').reverse().join(''));
}));

