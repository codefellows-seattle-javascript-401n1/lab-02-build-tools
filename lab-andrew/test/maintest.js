'use strict';

const main = require(__dirname + '/../index');
const assert = require('assert');

describe('testing module index', function() {
  describe('testing main function', function() {
    it('should return inputed name', function() {
      process.argv = ['year', 'andrew', 'andrew'];
      assert.equal(main(process.argv), 'hello andrew');
    });
  });
});
