"use strict";
// Iterables & Iterators
// --- Make an object iterable  ---
// use a for of loop to print numbers from 0 to 5o
/*

const range = {};
for (let num of range) {
  console.log(num);
}

*/
//1. For an object to be an iterable, it must implement a method at the key [Symbol.Iterators]
/*
const range = {
  [Symbol.iterator]: function () {},
};
*/
//2. [Symbol.iterator]() should not take any arguments and it should conform to the iterator protocol
// const range = {
//   [Symbol.iterator]: function () {
//     const iterator = {};
//     return iterator;
//   },
// };
//3. An iterator is an object that has a method at the key next. That method should return an object which contains two properties: value and done
// const range = {
//   [Symbol.iterator]: function(){
//     const iterator = {
//       next:function(){
//         {value:, done:}
//       }
//     };
//     return iterator
//   }
// }
//Solution
const range = {
    [Symbol.iterator]: function () {
        let counter = 0;
        const iterator = {
            next: function () {
                const result = { value: counter, done: false };
                if (counter <= 500) {
                    counter++;
                    return result;
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
//# sourceMappingURL=test.js.map