"use strict";
// Iterables & Iterators
// --- Implementing iterable protocol  ---
/*
 *  Iterable Protocol - the object should implement a method at the key [Symbol.iterator] and the method accepts no argument and returns an iterator
 */
//1.Crate an empty object
let obj = {};
//2.  Implement iterable protocol
//2.1 Implement a method at the key [Symbol.iterator]
obj = {
    [Symbol.iterator]: function () { },
};
//2.2 The method at 2.1 should not accept any argument and should return an object which conforms to the iterator protocol
obj = {
    [Symbol.iterator]: function () {
        const iterator = {};
        return iterator;
    },
};
// --- Implementing iterator protocol  ---
/**
 * ------ Iterator
 * is an object that has a method at the key 'next'
 * this method should return an object which contains two properties.'value' and 'done'
 */
obj = {
    [Symbol.iterator]: function () {
        let step = 0;
        const iterator = {
            next: function () {
                step++;
                if (step === 1) {
                    return { value: 'Hello', done: false };
                }
                else if (step === 2) {
                    return { value: 'World', done: false };
                }
                else
                    return { value: undefined, done: true };
            },
        };
        return iterator;
    },
};
// What is happening now whe I run the for of loop on the obj
for (const word of obj) {
    console.log(word);
}
//# sourceMappingURL=test.js.map