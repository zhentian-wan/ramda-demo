const R = require('ramda');

const person = {
    id: 1,
    name: 'Joe'
};

/*
// First Version
const generateUrl = (id) => `http://img.soicalnetwork.com/avatar/${id}.png`;
const getUpdatedPerson = (person) => {
    const url = generateUrl(person.id);
    return R.assoc('avatar', url, person);
}  

const result = getUpdatedPerson(person);
*/

//===============================================
// #1 Refactoring
//===============================================
/*
 Solve the problem that when id is undefined, we need a default image
 Solution: propOr('defaultValue', 'prop')
 */
/*
const generateUrl = (id) => `http://img.soicalnetwork.com/avatar/${id}.png`;
const getUpdatedPerson = (person) => {
    const url = generateUrl(R.propOr('default', 'id')(person));
    return R.assoc('avatar', url, person);
}  
const result = getUpdatedPerson(person);
console.log(result);
*/


//===============================================
// #2 Refactoring
//===============================================
/**
 * Extra a single function to get Person url.
 * Solution: Here we using R.compose.
 * SO getURLFromPerson is point-free function.
 */
/*
const generateUrl = (id) => `http://img.soicalnetwork.com/avatar/${id}.png`;
const getURLFromPerson = R.compose(
    generateUrl,
    R.propOr('default', 'id')
);
const getUpdatedPerson = (person) => R.assoc('avatar', getURLFromPerson(person), person);
const result = getUpdatedPerson(person);
console.log(result);
*/


//===============================================
// #3 Refactoring
//===============================================
/**
 * In getUpdatedPerson function, we still relay on the 'person' param we pass in.
 * We want to make it a point-free function also.
 * Solution: we can use R.converge
 */
const generateUrl = (id) => `http://img.soicalnetwork.com/avatar/${id}.png`;
const getURLFromPerson = R.compose(
    generateUrl,
    R.propOr('default', 'id')
);
// const getUpdatedPerson = (person) => R.assoc('avatar', getURLFromPerson(person), person);
const getUpdatedPerson = R.converge(
    R.assoc('avatar'),
    [
        getURLFromPerson,
        R.identity
    ]
)
const result = getUpdatedPerson(person);
console.log(result);