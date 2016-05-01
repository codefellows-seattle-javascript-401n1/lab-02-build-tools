'use strict';

const assert = require('assert');
var main = require(__dirname + '/../index');

describe('testing module index', () => {
  describe('testing main function', () => {
    it('with process.argv[2] = Mya should return "hello Mya"', () => {
      process.argv = ['fake', 'path', 'Mya'];
      assert.equal(main(), 'hello Mya');
    });
  });
});
