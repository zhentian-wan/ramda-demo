const R = require('ramda');

const {converge, compose, head, sort, identity, equals, descend} = R;

const shouldBeTrue = [6,2,3,4,5,2,1];
const shouldBeFalse = [5,2,3,6,8];

// const isFirstBiggest = (x) => x[0] === x.sort((a, b) => b - a)[0];
const biggestItem = compose(
    head,
    sort(descend(identity))
);
const isFirstBiggest = converge(
    equals,
    [
        head,
        biggestItem
    ]
);


const result1 = isFirstBiggest(shouldBeTrue); // true
const result2 = isFirstBiggest(shouldBeFalse); // false

console.log(result1);
console.log(result2);
