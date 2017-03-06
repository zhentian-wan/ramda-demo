const R = require('ramda');

const {sort, sortBy, sortWith, descend, prop, ascend} = R;

const sample = [
    {name: "Sally", age: 29, height: 65},
    {name: "Zac", age: 29, height: 72},
    {name: "John", age: 32, height: 61},
    {name: "Lisa", age: 28, height: 63},
    {name: "Bob", age: 29, height: 66},
    {name: "Allen", age: 29, height: 66}
];

const heightDescending = descend(prop('height'));
const ageDescending = descend(prop('age'));
const nameAscending = ascend(prop('name'));

const sortWithCondition = sortWith([
                                       heightDescending,
                                       ageDescending,
                                       nameAscending
                                   ]);

const result = sortWithCondition(sample);
/*
* [ { name: 'Zac', age: 29, height: 72 },
  { name: 'Allen', age: 29, height: 66 },
  { name: 'Bob', age: 29, height: 66 },
  { name: 'Sally', age: 29, height: 65 },
  { name: 'Lisa', age: 28, height: 63 },
  { name: 'John', age: 32, height: 61 } ]
* */
console.log(result);

/*
* sort: take function
* */
const sortByNameDescending = sort(descend(prop('name')));
const result1 = sortByNameDescending(sample);
/*
* [ { name: 'Zac', age: 29, height: 72 },
  { name: 'Sally', age: 29, height: 65 },
  { name: 'Lisa', age: 28, height: 63 },
  { name: 'John', age: 32, height: 61 },
  { name: 'Bob', age: 29, height: 66 },
  { name: 'Allen', age: 29, height: 66 } ]
* */
console.log("sortByNameDescending:", result1);


/*
* sortBy: take prop
* */
const age = prop('age');
const result2 = sortBy(age);
/*
* [ { name: 'Lisa', age: 28, height: 63 },
  { name: 'Sally', age: 29, height: 65 },
  { name: 'Zac', age: 29, height: 72 },
  { name: 'Bob', age: 29, height: 66 },
  { name: 'Allen', age: 29, height: 66 },
  { name: 'John', age: 32, height: 61 } ]
* */
console.log(result2(sample));