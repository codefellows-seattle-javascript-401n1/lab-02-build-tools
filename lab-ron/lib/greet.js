'use strict';

exports.greet = function(name){
  if(name === undefined){
    return 'hello ron';
  }
  return 'hello ' +name;
};

module.exports = exports;
