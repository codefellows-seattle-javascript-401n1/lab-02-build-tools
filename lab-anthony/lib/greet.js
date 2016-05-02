'use strict';

function greet(name){
  console.log('Hello ' + process.argv[2]);
  return 'Hello ' + name;
}

exports.greet = greet;
