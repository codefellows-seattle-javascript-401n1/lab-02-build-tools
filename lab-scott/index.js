'use strict';

const greet = require(__dirname + '/lib/greet.js');
const inputVal = process.argv.slice(2, process.argv.length);

greet(inputVal);
