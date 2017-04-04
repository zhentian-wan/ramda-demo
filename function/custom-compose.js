/*
* Utils
* */
const compose = (f, g) => (...args) => f(g(...args));

const composeAll = (...fns) => fns.reduce(compose);
/*
* Libs
* */
export const add = (a, b) => a + b;

export const inc = (a) => a + 1;

export const dbl = (a) => a * 2;

export const addInc = compose(inc, add);

export const addIncDbl = composeAll(dbl, inc, add);