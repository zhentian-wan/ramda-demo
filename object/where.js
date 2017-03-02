const R = require('ramda');

const {where, lt, gt, map, chain, not, compose, pluck, filter, equals, pickAll} = R;

const products = [
    {name: 'Jeans', price:80, category: 'clothes', stock: 100},
    {name: 'Hoodie', price:50, category: 'clothes', stock: 20},
    {name: 'Sneakers', price:120, category: 'clothes', stock: 30},
    {name: 'TV', price:500, category: 'electronics', stock: 60},
    {name: 'Cards', price: 35, category: 'games', stock: 10},
    {name: 'iPhone', price: 649, category: 'electronics', stock: 5},
    {name: 'Sauce Pan', price: 100, category: 'housewares', stock: 200}
];

const predict = where({
                          price: lt(R.__, 300),
                          stock: gt(R.__, 10),
                          category: compose(not, equals('clothes'))
                      });

const filterByConditions = filter(predict);
const getProductsName = compose(
    pluck('name'),
    filterByConditions
);
const getProductNameWithPrice = compose(
   map(pickAll(['name', 'price'])),
   filterByConditions
);
const result = getProductsName(products); // ['Sauce Pan']
const result2 = getProductNameWithPrice(products); // [ { name: 'Sauce Pan', price: 100 } ]

console.log(result);
console.log(result2);