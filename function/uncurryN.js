const R = require('ramda');
const {curry, curryN, uncurryN} = R;

const add = curry((a, b) => a + b);

const inc = add(1);
const result = inc(4); // 5

// Using curryN can be more clear, how many args it needs
const addTwoNumber = curryN(2, (a, b) => a + b);
const incTwo = addTwoNumber(2);
const result2 = incTwo(6);

// Using uncurryN
const muli = a => b => a * b; // assume this is from a third party lib, and we cannot change it
// const err = muli(1,2); // this will just return a Func
// console.log(err); // [Function]
const multiply = uncurryN(2, muli);
const result3 = multiply(1,2); // Now we can pass two args at the same time


console.log(result);
console.log(result2);
console.log(result3);