'use-strict';

const greet = require(__dirname + '/../lib/index');
const assert = require('assert');

describe('test module lib/index.js', function(){
  describe('test function greet()', function(){
    it('should return HELL-O' , function(){
      assert.equal(greet(), 'hello Justin');
      process.argv[2] = 'abc';
      assert.equal(greet(), 'hello ' + process.argv[2]);

    });
  });
});
