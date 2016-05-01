'use strict';

const greeter = {};

greeter.greeting = function(name) {
  var input = name;
  console.log('hello ' + input);
  return 'hello ' + input;
};

module.exports = greeter;
