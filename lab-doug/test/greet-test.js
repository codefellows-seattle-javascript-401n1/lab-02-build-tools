'use strict';

var myGreet = require(__dirname + '/../lib/greet');

const assert = require('assert');

describe('Testing greet module', function(){
  describe('Testing greet()', function(){
    it('should return "hello bob"', function(){
      const result = myGreet.greet('bob');
      assert.equal(result, 'hello bob');
    });
  });
});
