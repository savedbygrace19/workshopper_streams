"use strict"
const split = require('split');
const through2 = require('through2');

let count = 1;
process.stdin.
    pipe(split()).
    pipe(through2(function(line, _, next) {
        let result = (count % 2 > 0) ? 
            line.toString().toLowerCase() :
            line.toString().toUpperCase();

        result += '\n';
        count++;
        this.push(result);
        next();
    })).
    pipe(process.stdout)
;
