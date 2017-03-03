const R = require('ramda');
const {allPass, propEq, map, compose, filter, project} = R;

const needs = ['wifi', 'shower', 'laundry'];

const homes = [{
    name: 'Home 1',
    wifi: 'y',
    shower: 'y',
    laundry: 'y',
    metro: 'n',
    balcony: 'y',
    fireplace: 'n',
    pool: 'y'
}, {
    name: 'Home 2',
    wifi: 'n',
    shower: 'y',
    laundry: 'y',
    metro: 'n',
    balcony: 'n',
    fireplace: 'n',
    pool: 'n'
}, {
    name: 'Home 3',
    wifi: 'y',
    shower: 'y',
    laundry: 'y',
    metro: 'n',
    balcony: 'y',
    fireplace: 'y',
    pool: 'n'
}, {
    name: 'Home 4',
    wifi: 'y',
    shower: 'y',
    laundry: 'n',
    metro: 'n',
    balcony: 'n',
    fireplace: 'n',
    pool: 'n'
}];

const allNeedsMatchY = allPass(
    map(propEq(R.__, 'y'), needs)
);
const filterNeeds = filter(allNeedsMatchY);
const getNameWithNeeds = project([...needs, 'name']);
const getMatchedHomeNameAndNeeds = compose(
    getNameWithNeeds,
    filterNeeds
);
const result = getMatchedHomeNameAndNeeds(homes);
console.log(result);