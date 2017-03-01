const R = require('ramda');

const {view, lens, assoc, prop, set, over, lensProp, toUpper} = R;

const person = {
    firstName: 'Fred',
    lastName: 'Filntstore'
};

/*
* What lens does is modify prop value for a given object
* and keep data immutable.
* */

const firstNameLens = lens(
    prop('firstName'),
    assoc('firstName')
);
const viewFirstName = view(firstNameLens);
// const result = viewFirstName(person); // Fred

/** Using R.set **/
const setFirstName = set(firstNameLens);
const updateFirstName = setFirstName('Zhentian');
// const result = updateFirstName(person); // { firstName: 'Zhentian', lastName: 'Filntstore' }

/** Using R.over instead of set **/
const result = over(firstNameLens, toUpper, person);

/** lensProp instead of prop + assoc **/
const lastNameLens = lensProp('lastName');
const result2 = over(lastNameLens, toUpper, person); // { firstName: 'Fred', lastName: 'FILNTSTORE' }
console.log(result);
console.log(result2);