'use strict';

const greet = require(__dirname + '/lib/greet.js');
const args = process.argv[2];

greet(args);
