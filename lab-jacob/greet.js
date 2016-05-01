'use strict';

const greet = require(__dirname + '/lib/input');

console.log(greet(process.argv[2]));
greet(process.argv[2]);
