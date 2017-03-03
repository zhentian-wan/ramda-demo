const R = require('ramda');

const {pipe, tap, ascend, sort, prop, head, curry} = R;

const log = curry((desc, x) => R.tap(() => console.log(desc, JSON.stringify(x, null, 2)), x));

const teams = [
    {name: 'Lions', score: 5},
    {name: 'Tigers', score: 4},
    {name: 'Bears', score: 6},
    {name: 'Monkeys', score: 2},
];

const sortByScoreAscend =sort(ascend(prop('score')));
const getName = prop('name');

const getLastTeamName = pipe(
  sortByScoreAscend,
  log('after sort'),
  head,
  log('only header'),
  getName
);

const result = getLastTeamName(teams);
console.log(result); // Monkeys