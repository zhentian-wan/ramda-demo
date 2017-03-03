const R = require('ramda');

const {project, map, pick} = R;

const products = [
    {name: 'Jeans', price:80, category: 'clothes'},
    {name: 'Hoodie', price:60, category: 'clothes'},
    {name: 'Jacket', price:120, category: 'clothes'},
    {name: 'Cards', price: 35, category: 'games'},
    {name: 'iPhone', price: 649, category: 'electronics'},
    {name: 'Sauce Pan', price: 100, category: 'housewares'}
];

// const getNameAndPrice = R.map(R.pick(['name', 'price']));

/*Using R.project to replace R.map(R.pick())*/
const getNameAndPrice = R.project(['name', 'price']);
const result = getNameAndPrice(products);

console.log(result);