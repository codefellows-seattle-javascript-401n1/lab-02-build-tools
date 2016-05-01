'use strict';

var main = require(__dirname + '/../index');
const assert = require('assert');

describe('testing module index', function(){
  describe('testing main function', function(){
    it('main with process.arv[2] = matt should return "hello matt"', function(){
      process.argv = ['place', 'holder', 'matt'];
      assert.equal(main(process.argv), 'hello matt');
    });
  });
});
