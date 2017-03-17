const R = require('ramda');
const {path, pathOr} = R;

const acctDept = {
    name: 'Accounts Payable',
    location: '14th floor',
    personnel: {
        manager: {
            fName: 'Bill',
            lName: 'Lumberg',
            title: 'director of stuff and things',
            salary: 75000
        }
    }
};

const itDept = {
    name: 'IT',
    location: 'remote',
    personnel: {}
};

// path: will return undefined if cannot find prop
const getMrgLastName = path(['personnel', 'manager', 'lName']);
const getMrgLastNameOrDefaultVal = pathOr('Nobody', ['personnel', 'manager', 'lName'])

const res = getMrgLastName(acctDept);
console.log("res:", res); // Lumberg
const res2 = getMrgLastName(itDept);
const res3 = getMrgLastNameOrDefaultVal(itDept);
console.log("res2:", res2); // undefined
console.log("res3:", res3); // Nobody