'use strict';

const app = require(__dirname + '/lib/greet');
const main = module.exports = function () {
  return app.greet(process.argv[2]);
};

console.log(main());
