const R = require('ramda');

const {pick, prop, pickBy, pickAll, props, omit, compose, not, curry} = R;

const log = curry((desc, x) => R.tap(() => console.log(desc, JSON.stringify(x, null, 2)), x));

const product = {
    name: 'widget',
    price: 10,
    shippingWeight: 20,
    shippingMethod: 'UPS'
};

// get one single prop from a large object
const getByProp = pick(['name']); // { name: 'widget' }

// different from R.prop
const getPropVal = prop('name'); // 'widget'

const getByProps = pickAll(['name', 'price']); // { name: 'widget', price: 10 }

const getPropsVals = props(['name', 'price']); // [ 'widget', 10 ]

const getByPickBy = pickBy((val, key) => {
    // Only get prop if
    // val: is number
    // key contains 'shipping'
    return Number(val) && key.includes('shipping');
});  // { shippingWeight: 20 }

const omitShippingProps = omit(['shippingWeight', 'shippingMethod']); // { name: 'widget', price: 10 }

// another way to omit props by conditions
const notToPickByShippingProps = pickBy((val, key) => !key.includes('shipping')); // { name: 'widget', price: 10 }


const result = notToPickByShippingProps(product);
console.log(result);