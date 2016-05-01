'use strict';
const greeting = require(__dirname + '/../lib/greet');

const assert = require('assert');

describe('testing greeting', function(){
  describe('testing the greeting("davide")', function(){
    it('should return a greeting "hello davide how are you?"', function(){
      const result = greeting('davide');
      assert.equal(result,'hello davide how are you?');
    });
  });
});
