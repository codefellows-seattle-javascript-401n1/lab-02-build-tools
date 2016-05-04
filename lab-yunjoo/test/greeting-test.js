'use strict';
const greet = require(__dirname + '/../index');
const assert = require('assert');
describe('testing module lib/greet.js',function(){
  describe('testing function greeting()',function(){
    it('should return "hello yunjoo"', function(){
      assert.equal(greet(), 'hello yunjoo');
    });
  });
});
