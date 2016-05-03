'use strict';
//imporing the greeting method from the greetings module
const greet = require(__dirname + '/lib/greet').greet;
//declear a const variable main
//assigin module.exports and main the value of a function
const main = module.exports = function(){
  //return the value of greet with the argv[2] as an argument
  return greet(process.argv[2]);
};
//console.log the result of
console.log(main());

// 'use strict';
// var main = require(__dirname +'/../index');
//var equal = require('assert').equal
// describe('testing module index', function(){
//   describe('testing main function', function(){
//     it('with process.arv[2] = slugshould return "hello slug"', function(){
// process.argv= ['node','index.js','slug'];
// equal(main(),'hello slug');
//})
//   });
// });
