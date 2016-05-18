'use strict';

var main = require(__dirname + '/../main');
var equal = require('assert').equal;

describe('testing module main', function(){
  describe('testing main function', function(){
    it('with process.argv[2] = kyle should return hello kyle', function(){
      const result = main();
      equal(result, 'hello kyle');
    });
  });
});
