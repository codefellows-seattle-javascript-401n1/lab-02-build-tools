'use strict';

const greet = require(__dirname + '/lib/greet').greet;

//declare a const variable main
//assign module.exports and main the value of a function
const main = module.exports = function(){
  //return the value of greet with the argv[2] as an argument
  return greet(process.argv[2]);

};
//invoke console.log the result of invoking the main function
console.log(main());
