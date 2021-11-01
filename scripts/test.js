"use strict";
// Iterables & Iterators
// --- Make an object iterable  ---
// use a for of loop to print numbers from 0 to 5o
/*

const range1 = {};
for (let num of range) {
  console.log(num);
}

*/
//1. For an object to be an iterable, it must implement a method at the key [Symbol.Iterators]
const range11 = {
    [Symbol.iterator]: function () { },
};
//2. [Symbol.iterator]() should not take any arguments and it should conform to the iterator protocol
const range111 = {
    [Symbol.iterator]: function () {
        const iterator = {};
        return iterator;
    },
};
//3. An iterator is an object that has a method at the key next. That method should return an object which contains two properties: value and done
const range1111 = {
    [Symbol.iterator]: function () {
        const iterator = {
            next: function () {
                //  return  {value: ... , done: ...}
            },
        };
        return iterator;
    },
};
//Solution
const range = {
    [Symbol.iterator]: function () {
        let counter = 1;
        const iterator = {
            next: function () {
                counter++;
                if (counter <= 50) {
                    return { value: counter, done: false };
                }
                return { value: undefined, done: true };
            },
        };
        return iterator;
    },
};
for (let num of range) {
    console.log(num);
}
console.log([...range]);
/*
Extending solution to:
Pass three values: start, end, interval.Print the range starting from start value till the end value with interval size increments
ex: start 10, end=20 interval = 2 => 10,12,14,16,18,20
*/
const customRange = {
    [Symbol.iterator]: function (start = 0, end = 50, range = 1) {
        let counter = start;
        const iterator = {
            next: function () {
                const result = { value: counter, done: false };
                if (counter <= end) {
                    counter += range;
                    return result;
                }
                return { value: undefined, done: true }; // or {done: true}
            },
        };
        return iterator;
    },
};
// log 0 2 3 4 ... 50
for (let num of customRange) {
    console.log(num);
}
//Logs [0,2,3,4, ...50]
console.log([...customRange]);
// Ex1
const iterator = customRange[Symbol.iterator](10, 20, 2);
console.log(iterator.next()); // {value: 10, done: false}
console.log(iterator.next()); // {value: 12, done: false}
console.log(iterator.next()); // {value: 14, done: false}
console.log(iterator.next()); // {value: 16, done: false}
console.log(iterator.next()); // {value: 18, done: false}
console.log(iterator.next()); // {value: 20, done: false}
console.log(iterator.next()); // {value: undefined, done: true}
//Ex2
const iterator1 = customRange[Symbol.iterator](10, 20, 2);
let result = iterator1.next();
while (!result.done) {
    console.log(result.value);
    result = iterator1.next();
}
//# sourceMappingURL=test.js.map