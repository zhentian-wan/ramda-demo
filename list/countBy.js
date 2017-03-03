const R = require('ramda');
const {countBy, invert, toLower, map, sortBy, pipe, match, tap, curry, identity} = R;

const log = curry((desc, x) => tap(()=> {console.log(desc, x)}, x));

const text = `
'have no fear of this mess,'
said the cat in the hat.
'i always pick up all my playthings
and so...
i will show you another
good trick that i know!'

then we saw him pick up all the things that were down.
he picked up the cake,
and the rake, and the gown,
and the milk, and the strings,
and the books, and the dish,
and the fan, and the cup,
and the ship, and the fish.
and he put them away.
then he said, 'that is that.'
and then he was gone
with a tip of his hat.

then our mother came in
and she said to us two,
'did you have any fun?
tell me.  what did you do?'

and sally and i did not know
what to say.
should we tell her
the things that went on there that day?

should we tell her about it?
now, what SHOULD we do?
well...
what would YOU do
if your mother asked YOU?`;

// invert: from {foo: 'bar'} to {bar: foo}, if there are multi 'bar'
// then it group those into array

const countByWords = pipe(
    match(/\w+/g),
    countBy(toLower),
    invert,
    map(sortBy(identity))
);

const result = countByWords(text);
console.log(result);
/*
* { '1':
   [ 'a',
     'about',
     'always',
     'another',
     'any',
     'asked',
     'away',
     'books',
     'cake',
     'came',
     'cat',
     'cup',
     'day',
     'dish',
     'down',
     'fan',
     'fear',
     'fish',
     'fun',
     'gone',
     'good',
     'gown',
     'him',
     'his',
     'if',
     'is',
     'it',
     'me',
     'mess',
     'milk',
     'my',
     'no',
     'not',
     'now',
     'on',
     'our',
     'picked',
     'playthings',
     'put',
     'rake',
     'sally',
     'saw',
     'say',
     'she',
     'ship',
     'show',
     'so',
     'strings',
     'them',
     'there',
     'this',
     'tip',
     'trick',
     'two',
     'us',
     'was',
     'well',
     'went',
     'were',
     'will',
     'with',
     'would',
     'your' ],
  '2':
   [ 'all',
     'hat',
     'have',
     'her',
     'in',
     'know',
     'mother',
     'of',
     'pick',
     'things',
     'to' ],
  '3': [ 'did', 'do', 'said', 'should', 'tell', 'up' ],
  '4': [ 'he', 'i', 'then', 'we', 'what' ],
  '5': [ 'you' ],
  '6': [ 'that' ],
  '15': [ 'the' ],
  '16': [ 'and' ] }
* */