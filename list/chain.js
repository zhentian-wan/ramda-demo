const R = require('ramda');

const {map, chain, prop, pluck, compose, uniq, tap, curry} = R;

const product = {
    name: "Sample Data",
    sizes: [
        {
            name: "L",
            colors: [
                {
                    name: "Red"
                },
                {
                    name: "Blue"
                }
            ]
        },
        {
            name: "M",
            colors: [
                {
                    name: "Green"
                },
                {
                    name: "Yellow"
                }
            ]
        },
        {
            name: "S",
            colors: [
                {
                    name: "Orange"
                },
                {
                    name: "Purple"
                },
                {
                    name: "Blue"
                }
            ]
        }
    ]
};

const log = curry((desc, x) => R.tap(() => console.log(desc, JSON.stringify(x, null, 2)), x));

// Target: to get unique array of color from product object

const sizes = prop('sizes');
const getColors = chain(prop('colors')); // flatMap, get colors props from array of objects
const getColorNames = pluck('name'); // get name prop from array of objects
const res = compose(
    uniq,
    log("after name"),
    getColorNames,
    log("after colors"),
    getColors,
    log("after sizes"),
    sizes
)(product);

console.log(JSON.stringify(res, null, 2));
/*
* after sizes [
  {
    "name": "L",
    "colors": [
      {
        "name": "Red"
      },
      {
        "name": "Blue"
      }
    ]
  },
  {
    "name": "M",
    "colors": [
      {
        "name": "Green"
      },
      {
        "name": "Yellow"
      }
    ]
  },
  {
    "name": "S",
    "colors": [
      {
        "name": "Orange"
      },
      {
        "name": "Purple"
      },
      {
        "name": "Blue"
      }
    ]
  }
]
after colors [
  {
    "name": "Red"
  },
  {
    "name": "Blue"
  },
  {
    "name": "Green"
  },
  {
    "name": "Yellow"
  },
  {
    "name": "Orange"
  },
  {
    "name": "Purple"
  },
  {
    "name": "Blue"
  }
]
after name [
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Orange",
  "Purple",
  "Blue"
]
[
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Orange",
  "Purple"
]
* */