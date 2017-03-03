
## function
* [converge part1](./function/converge.js) -- point free function style - part1
* [converge part2](./function/converge2.js) -- point free function style - part2
* [useWith](./function/useWith.js) -- point free function, for multi args function
* [point-free-style](./function/point_free.md) -- different between using converge & useWith
* [pipe](./function/pipe.js) -- FP pipe
* [uncurryN](./function/uncurryN.js) -- uncurryN a third party lib if need to overwrite function
* [tryCatch](./function/tryCatch.js) -- error handling

## list
* [partition](./list/partition.js) -- filter, reject, partition, different ways to davide an array
* [chain](./list/chain.js) -- flatMap, get unique array from a nested array, also an example how to use R.tap
* [unfold](./list/unfold.js) -- generate list of array
* [fromPairs](./list/fromPairs.js) -- from [['a', 'b'], ['c', 'd']] to {a: b, c: d}
* [countBy](./list/countBy.js) -- showing countBy and invert 

## logic
* [ifElse](./logic/ifElse.js) -- condition logic

## object
* [evolve](./object/evolve.js) -- showing how to update object's props values in a more understandable way
* [lens & lensProp](./object/lens.js) -- showing how to update object props by using lens or lensProp
* [project](./object/project.js) -- a clean way to replace R.map(R.pick['prop1', 'prop2'])
* [where](./object/where.js) -- combine where with filter, to make it really convenient writing complex predicts function
* [pick & omit](./object/pick.js) -- showing how to get object by props by condition, difference between R.pickAll (return objects) & R.prop (return value)
