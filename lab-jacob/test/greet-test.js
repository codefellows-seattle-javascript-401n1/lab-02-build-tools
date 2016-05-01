'use strict';

const greet = require(__dirname + '/../lib/input');
const assert = require('assert');

describe('testing input', function() {
  describe('testing the greeting', function () {
    it ('should assign "jacob" to argument and return hello jacob', function() {
      process.argv[2] = 'jacob';
      assert.equal(greet(process.argv[2]), 'hello jacob');
    });
  });
});
