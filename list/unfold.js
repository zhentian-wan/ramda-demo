const R = require('ramda');

// if return false, then stop iteration
// [n1, n2]: n1 is the value to be added to the result array
// n2: is the value return to next iteration as a starting value
const throughNByOne = R.curry((limit, n) => n > limit ? false: [n, n + 1]);
const throughNByBaseTwo = R.curry((limit, n) => n > limit ? false: [n, n * 2]);

const res1 = R.unfold(throughNByOne(23), 3); // [ 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23 ]
console.log(res1);

const res2 = R.unfold(throughNByBaseTwo(256), 2); // [ 2, 4, 8, 16, 32, 64, 128, 256 ]
console.log(res2);



