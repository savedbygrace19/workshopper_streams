"use strict"
const through2 = require('through2');

const write = function(buffer, encoding, next) {
    this.push(buffer.toString().toUpperCase());
    next();
};

const end = function(done) {
    done();
};

const stream = through2(write, end);

process.stdin.pipe(stream).pipe(process.stdout);
