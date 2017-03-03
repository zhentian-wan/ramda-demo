const R = require('ramda');
const {filter, reject, partition, propEq, identity, converge} = R;

const pets = [
    {name: 'Spike', type: 'dog'},
    {name: 'Mittens', type: 'cat'},
    {name: 'Rover', type: 'dog'},
    {name: 'Fluffy', type: 'cat'},
    {name: 'Fido', type: 'dog'}
];

const doTypeFilter = type => filter(propEq('type', type));
const doTypeReject = type => reject(propEq('type', type));

const dogFilter = doTypeFilter('dog'); // only get dogs related back
const dogReject = doTypeReject('dog'); // only get cats related back
const result = dogFilter(pets);
const result1 = dogReject(pets);
console.log(result);
/*[ { name: 'Spike', type: 'dog' },
  { name: 'Rover', type: 'dog' },
  { name: 'Fido', type: 'dog' } ]*/

console.log(result1);
/*
* [ { name: 'Mittens', type: 'cat' },
  { name: 'Fluffy', type: 'cat' } ]
* */

const doPartition = type => partition(propEq('type', type));
const dogPartition = doPartition('dog');
const result2 = dogPartition(pets);
console.log(result2);
/*
* [ [ { name: 'Spike', type: 'dog' },
    { name: 'Rover', type: 'dog' },
    { name: 'Fido', type: 'dog' } ],
  [ { name: 'Mittens', type: 'cat' },
    { name: 'Fluffy', type: 'cat' } ] ]
* */