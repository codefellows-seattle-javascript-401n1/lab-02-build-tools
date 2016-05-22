'use strict';

const greeter = require(__dirname + '/../lib/greeting');
const assert = require('assert');

describe('testing greeting.js', function(){
  describe('testing greeter.greeting', function(){
    it('should return "hello + [name]"', function(){
      const result = greeter.greeting('SAM');
      assert.equal(result, 'hello SAM', 'I am a discriptive error');
    });
  });
});
