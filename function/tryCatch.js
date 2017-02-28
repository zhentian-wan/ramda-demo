const R = require('ramda');

const person = {
    id: 1,
    name: 'Joe'
};

/*
* The problem for this code:
* R.prop('name') assume that the object passed in has 'name' prop
* But what if the object is undefined? Then we will get error.
*
* Solution: R.tryCatch() | R.propOr
* */
/*
const getPersonName = R.prop('name');
const getUpperCaseName = R.pipe(
    getPersonName,
    R.toUpper
);
const res = getUpperCaseName(person); // ERROR
*/

const getPersonName = R.tryCatch(R.prop('name'), R.always('Default'));
// Another way:
// const getPersonName = R.propOr('Default', 'name');
const getUpperCaseName = R.pipe(
    getPersonName,
    R.toUpper
);
const res = getUpperCaseName(undefined);  // DEFAULT


console.log(res);