'use-strict';

const greet = require(__dirname + '/../lib/greet');
const assert = require('assert');

describe('test module lib/index.js', function(){
  describe('test function index()', function(){
    it('should return HELL-O' , function(){
      assert.equal(greet('Justin'), 'hello Justin');

    });
  });
});
