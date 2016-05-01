'use strict';

const getGreet = require(__dirname + '/../lib/greet');
const assert = require('assert');


describe('Greeting', function() {
  describe('Testing greet module', function() {
    it('should return "Hello undefined"', function() {
      assert.equal(getGreet.greet(), 'Hello undefined');
    });
  });
});

describe('Greeting', function() {
  describe('Testing argument in Greet module', function() {
    it('should return "Hello Anthony"', function() {
      assert.equal(getGreet.greet('Anthony'), 'Hello Anthony');
    });
  });
});
