"use strict";
//Function Currying Problem - solution 1
//Implement a generic curry function
//Write a function that takes any function and returns a curried version of the function
function sum(a, b) {
    return a + b;
}
sum(300, 10);
// let curriedSum = genericCurry(sum);
// curriedSum(2)(3);
// curriedSum(2, 3);
// //Solution 1
function genericCurryOne(f) {
    return function currify(...args) {
        if (args.length >= f.length) {
            return f.apply(this, args);
        }
        else {
            return function (...newArgs) {
                return currify.apply(this, args.concat(newArgs));
            };
        }
    };
}
let curriedSum = genericCurryOne(sum);
console.log(curriedSum(2)(3));
console.log(curriedSum(2, 9));
//# sourceMappingURL=test.js.map