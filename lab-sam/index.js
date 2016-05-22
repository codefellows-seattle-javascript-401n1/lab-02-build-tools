'use strict';

const greeter = require(__dirname + '/lib/greeting');

var input = process.argv[2] || 'SAM';

greeter.greeting(input);
