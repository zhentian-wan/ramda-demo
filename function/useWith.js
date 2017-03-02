const R = require('ramda');

const { find, useWith, identity, propEq } = R;

const countries = [
    {flag: 'GB', cc: 'GB'},
    {flag: 'US', cc: 'US'},
    {flag: 'CA', cc: 'CA'},
    {flag: 'FR', cc: 'FR'}
];

// Normally when you see there are multi args, you can think to use 'R.useWith'
// to make it point free style
//const getCountry = (cc, list) => find(propEq('cc'), list);

/*
* Refactor the getCountry function to make it as point-free function
* */
const getCountry = useWith(
    find,
    [
        propEq('cc'),
        identity
    ]
);

const result = getCountry('US', countries);

console.log(result);