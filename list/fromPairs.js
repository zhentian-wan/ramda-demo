const R = require('ramda');

const {fromPairs, split, map, tail, compose} = R;

const queryString = '?page=2&pageSize=10&total=203';

const result = compose(
  fromPairs,
  map(split('=')),
  split('&'),
  tail
)(queryString);

console.log(result); // { page: '2', pageSize: '10', total: '203' }
