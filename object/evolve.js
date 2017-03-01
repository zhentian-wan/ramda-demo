const R = require('ramda');

const {evolve, inc, toUpper, merge} = R;

const product = {
    name: 'MacBook',
    weight: 12,
    shipping: {
        method: 'ups',
        cost: 21
    }
};

const updateProduct = evolve({
    weight: inc,
    shipping: {
        method: toUpper
    }
});
const updated = updateProduct(product);

console.log("Original: ", product);
console.log("Updated: ", updated);