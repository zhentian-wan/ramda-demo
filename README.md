
## function
* [converge part1](./function/converge.js) -- point free function style - part1
* [converge part2](./function/converge2.js) -- point free function style - part2
* [useWith](./function/useWith.js) -- point free function, for multi args function
* [point-free-style](./function/point_free.md) -- different between using converge & useWith
* [pipe](./function/pipe.js) -- FP pipe
* [composeP & pipeP](./function/composeP.js) -- compose Promise and pipe Promise
* [uncurryN](./function/uncurryN.js) -- uncurryN a third party lib if need to overwrite function
* [invoker & constructN](function/invoker.html) -- showing how to convert object methods into composable functions 
* [tryCatch](./function/tryCatch.js) -- error handling
* [Write my own compose](./function/custom-compose.js) -- write own compose and composeAll function

## list
* [partition](./list/partition.js) -- filter, reject, partition, different ways to davide an array
* [chain](./list/chain.js) -- flatMap, get unique array from a nested array, also an example how to use R.tap
* [unfold](./list/unfold.js) -- generate list of array
* [fromPairs](./list/fromPairs.js) -- from [['a', 'b'], ['c', 'd']] to {a: b, c: d}
* [countBy](./list/countBy.js) -- showing countBy and invert 
* [allPass](./list/allPass.js) -- showing all pass for condition check
* [zip](./list/zip.js) -- zip, zipObj to convert list to object style

## logic
* [ifElse](./logic/ifElse.js) -- condition logic
* [allPass](./logic/allPass.js) -- allPass & propSatisfies

## object
* [evolve](./object/evolve.js) -- showing how to update object's props values in a more understandable way
* [lens & lensProp](./object/lens.js) -- showing how to update object props by using lens or lensProp
* [path](./object/path.js) -- Get nested object value
* [project](./object/project.js) -- a clean way to replace R.map(R.pick['prop1', 'prop2'])
* [where](./object/where.js) -- combine where with filter, to make it really convenient writing complex predicts function
* [pick & omit](./object/pick.js) -- showing how to get object by props by condition, difference between R.pickAll (return objects) & R.prop (return value)
* [toPairs](./object/toPairs.js) -- showing how to convert an object to query string using toPairs / also see [fromPairs](./list/fromPairs.js)

## Relation
* [sortWith](./relation/sortWith.js) -- showing the difference between sort, sortWith, sortBy
