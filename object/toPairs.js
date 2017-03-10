const R = require('ramda');

const {map, join, concat, compose, toPairs} = R;

const obj = {
    page: 2,
    limit: 6,
    type: 'movies'
};

const createQs = compose(
    concat('?'), // ?page=2&limit=6&type=movies
    join('&'), // page=2&limit=6&type=movies
    map(join('=')), // [ 'page=2', 'limit=6', 'type=movies' ]
    toPairs  // [ [ 'page', 2 ], [ 'limit', 6 ], [ 'type', 'movies' ] ]
);
const result = createQs(obj);

console.log(result);