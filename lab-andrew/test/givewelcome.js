'use strict';

const greet = require(__dirname + '/../index');
const assert = require('assert');

describe('Test of module lib/welcome.js', function() {
  describe('Testing funciton welcome', function() {
    it('Should return Hello Andrew', function() {
      assert.equal(greet(), 'hello andrew');
    });
  });
});
