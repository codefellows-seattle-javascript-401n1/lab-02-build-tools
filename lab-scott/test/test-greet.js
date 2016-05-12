'use strict';
const assert = require('assert');
const greet = require(__dirname + '/../lib/greet.js');

describe('Testing module lib/greet.js', function() {
  describe('Testing function greeting; no cli arg', function() {
    it('Should return Hello Nobody', function() {
      assert.equal(greet(process.argv[2]), 'Hello Nobody');
    });
  });

  describe('Testing function greeting; one cli arg', function() {
    it('Should return Hello Scott', function() {
      assert.equal(greet(process.argv[2] = 'Scott'), 'Hello Scott');
    });
  });
});
