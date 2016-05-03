'use strict';

var human = { name: 'ada'};
function swapName(obj){
  obj.name = 'delia';
}

console.log('human before: ', human);
swapName(human);
console.log('human after: ',human);
