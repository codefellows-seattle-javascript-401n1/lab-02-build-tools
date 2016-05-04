'use strict';
const hello = require(__dirname + '/../lib/greet');
const  = require('assert');

describe('testing module lib/greet.js', function(){
  describe('testing function greet()', function(){
    it('should return hello world', function(){
      expect(hello.bufferfiles()).to.equal(new Buffer);
    });
  });
});
