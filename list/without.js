const R = require('ramda');
const {without, min, max, reduce, converge, identity, equals} = R

const getLowest = reduce(min, Number.MAX_VALUE)
const getHighest = reduce(max, Number.MIN_VALUE)
const getExcluded = converge((a, b) => [a, b], [getLowest, getHighest])

// From
const dropHighLow2 = numbers => {
  /*
  // version 1
  const lowest = getLowest(numbers)
  const highest = getHighest(numbers)
  return without([lowest, highest], numbers);
  */
  
  /*
  // version 2
  return without(getExcluded(numbers), numbers);
  */
  
  // version 3
  return converge(without, [getExcluded, identity])(numbers)
}

// To
const dropHighLow = converge(without, [getExcluded, identity])

const res = dropHighLow([1,2,3,4,5,6,7,8])
console.log(res, equals(res, [2,3,4,5,6,7]))
