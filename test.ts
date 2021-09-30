//Generic Function Currying - solution 1

//Implement a generic curry function
//Write a function that takes any function and returns a curried version of the function

function sum(a, b, c, d) {
  return a + b + c + d;
}

// let curriedSum = genericCurry(sum);
// curriedSum(2)(3);
// curriedSum(2, 3);

// //Solution 1
function genericCurryOne(f) {
  return function currify(...args) {
    if (args.length >= f.length) {
      return f.apply(this, args);
    } else {
      return function (...newArgs) {
        return currify.apply(this, args.concat(newArgs));
      };
    }
  };
}

let curriedSumOne = genericCurryOne(sum);
console.log(curriedSumOne(1)(2)(3)(4));
console.log(curriedSumOne(1, 2)(3)(4));
console.log(curriedSumOne(1, 2, 3)(4));
console.log(curriedSumOne(1, 2, 3, 4));

//Solution 2

function genericCurryTwo(f) {
  return function currify(...args) {
    return args.length >= f.length
      ? f.apply(this, args)
      : currify.bind(this, ...args);
  };
}
let curriedSumTwo = genericCurryTwo(sum);

console.log(curriedSumTwo(1)(2)(3)(4));
console.log(curriedSumTwo(1, 2)(3)(4));
console.log(curriedSumTwo(1, 2, 3)(4));
console.log(curriedSumTwo(1, 2, 3, 4));
