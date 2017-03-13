const R = require('ramda');

const {fromPairs, zip, zipObj} = R;

const getName = () => Promise.resolve('wan');
const getHobbies = () => new Promise((res, rej) => {
    "use strict";
    setTimeout(() => res(['basketball', 'skiing']));
});

Promise.all([getName(), getHobbies()])
//    .then(console.log); // [ 'wan', [ 'basketball', 'skiing' ] ]

// Make it as object style
Promise.all([getName(), getHobbies()])
    .then(([name, hobbies]) => ({name, hobbies}))
//    .then(console.log); // { name: 'wan', hobbies: [ 'basketball', 'skiing' ] }

// Using zip & fromPairs
Promise.all([getName(), getHobbies()])
    .then(zip(['name', 'hobbies'])) // [ [ 'name', 'wan' ], [ 'hobbies', [ 'basketball', 'skiing' ] ] ]
    .then(fromPairs) // { name: 'wan', hobbies: [ 'basketball', 'skiing' ] }
//    .then(console.log);


// zipOjb == zip + fromPairs
Promise.all([getName(), getHobbies()])
    .then(zipObj(['name', 'hobbies']))
    .then(console.log) // { name: 'wan', hobbies: [ 'basketball', 'skiing' ] }
