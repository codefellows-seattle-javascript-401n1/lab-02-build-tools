'use strict';

module.exports = function(name) {
  const argName = name !== undefined ? 'Hello ' + name : 'Hello Nobody';
  return argName;
};
