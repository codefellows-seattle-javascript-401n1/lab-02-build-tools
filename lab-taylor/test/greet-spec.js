'use strict';

const assert = require('assert');
const app = require(__dirname + '/../lib/greet');

describe('greet application', () => {
  describe('greet()', () => {
    it('should greet someone by name', () => {
      assert.equal(app.greet('taylor'), 'hello taylor');
    });
  });
});
