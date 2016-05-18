'use strict';

exports.greet = function(name) {
  const input = name || 'world';
  return 'hello ' + input;
};
