'use strict';

const howdy = require(__dirname + '/../lib/howdy');
const assert = require('assert');

describe('testing module lib/howdy.js', function(){
  describe('testing function howdy()', function(){
    it('should return "hello matt"', function(){
      assert.equal(howdy('matt'), 'hello matt');
    });
  });
});
