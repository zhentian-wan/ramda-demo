import {add, inc, dbl, addInc, addIncDbl} from '../function/custom-compose';

describe('basic fns', () => {
    "use strict";
    test('add', () => {
        const res = add(1,2);
        const expected = 3;
        expect(res).toBe(expected);
    });

    test('inc', () => {
        const res = inc(2);
        const expected = 3;
        expect(res).toBe(expected);
    });

    test('dbl', () => {
        const res = dbl(2);
        const expected = 4;
        expect(res).toBe(expected);
    });
});

describe('compose', () => {
    "use strict";
    test('add then inc', () => {
        const res = addInc(4, 2);
        const expected = 7;
        expect(res).toBe(expected);
    });
});

describe('composeAll', () => {
    "use strict";
   test('add, inc then dbl', () => {
       const res = addIncDbl(2, 3);
       const expected = 12;
       expect(res).toBe(expected);
   }) ;
});