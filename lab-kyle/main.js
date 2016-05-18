'use strict';

const greetings = require(__dirname + '/lib/greet');

const main = module.exports = function() {
  if (process.argv[2]) {
    return greetings.greet(process.argv[2]);
  } else {
    return 'hello kyle';
  }
};

console.log(main());
