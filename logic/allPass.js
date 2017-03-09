const R = require('ramda');

const { allPass, propEq, lte, propSatisfies, filter } = R;

const cars = [
    {
        name: 'suv',
        doors: 4,
        mpg: 19
    },
    {
        name: 'sedan',
        doors: 4,
        mpg: 30
    },
    {
        name: 'hybrid',
        doors: 4,
        mpg: 37
    },
    {
        name: 'compact',
        doors: 2,
        mpg: 32
    }
];

const mpgLte30 = propSatisfies(lte(R.__, 30), 'mpg');
const fourDoors = propEq('doors', 4);
const preds = allPass([
                          mpgLte30,
                          fourDoors
                      ]);
const result = filter(preds)(cars);
console.log(result);