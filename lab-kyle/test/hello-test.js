'use strict';
const hello = require(__dirname + '/../lib/greet');
const assert = require('assert');

describe('testing module lib/greet.js', function(){
  describe('testing function greet()', function(){
    it('should return hello world', function(){
      assert.equal(hello.greet(), 'hello world');
    });
  });
});
