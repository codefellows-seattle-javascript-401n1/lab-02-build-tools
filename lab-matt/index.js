'use strict';

const greet = require(__dirname + '/lib/howdy');

const main = module.exports = function() {
  return greet(process.argv[2]);
};

console.log(main());
