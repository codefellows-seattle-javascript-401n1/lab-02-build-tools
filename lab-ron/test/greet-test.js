'use strict';

const greet = require(__dirname + '/../lib/greet').greet;
const assert = require('assert');

describe('testing module greetings', function(){
  describe('testing function', function(){
    it('should return the greeting + the argument "ron"', function(){
      assert.equal(greet('ron'), 'hello ron');
    });
  });
});
