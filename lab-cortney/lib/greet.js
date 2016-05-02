'use strict';

module.exports = function(name) {
  const input = process.argv[2] || name;
  return 'hello ' + input;
};
