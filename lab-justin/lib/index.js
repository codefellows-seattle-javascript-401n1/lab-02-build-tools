'use strict';

module.exports = function(name){
  const input = name || process.argv[2] || 'Justin';

  return 'hello ' + input;
};
