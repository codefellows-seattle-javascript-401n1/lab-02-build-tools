'use strict';

const greetPeople = require(__dirname + '/lib/greet');
const input =  process.argv[2] || 'Justin';
console.log(greetPeople(input));
