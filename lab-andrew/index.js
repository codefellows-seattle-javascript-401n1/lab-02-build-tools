'use strict';
const greet = require(__dirname + '/lib/welcome');

const main = module.exports = function() {
  console.log(greet(process.argv[2]));
  return greet('andrew');
};

console.log(main());
