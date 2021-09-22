//Closure - a combination of the function and its scope(lexical environment) bundled together
//a Closure is created when a function is returned from another function
//An inner function has access to variables in the outer function scope even after the outer function has finished execution
//Closure allows the returned function to have an associated persistent memory which can hold on to live data between executions

//Invoking the inner function now
function outer() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  inner();
}
outer(); //o:1
outer(); //o:1 when the function is invoked again, it doesn't remember the data ,that was stored in the memory from the previous run

//Invoking the inner function later
function outerA() {
  let counter = 0;
  function innerA() {
    counter++;
    console.log(counter);
  }
  return innerA; //JS returns the innerA function + its lexical environment(counter variable) // innerA Fn + counter = closure // The function will remember the value of the counter variable
}
const fn1 = outerA();
fn1(); //o:1
fn1(); //o:2

// Memoization
//"Memoization is an optimization technique used to speed up computer programs by storing the result of expensive functions calls and returning the cached result when the same inputs occur again"

//Problem
// need a function that calculates the square of a number for the first time and if the square was already calculated it will return it from cash

//Solution
function memoizedSquare() {
  let cache = {};
  return function optimizeSquare(num) {
    if (cache[num]) {
      console.log(
        `Square for ${num} is present in the cache and the value is:}`
      );
      return cache[num];
    } else {
      const square = num * num;
      cache[num] = square;
      console.log(
        `Square for ${num} is *NOT* present in the cache. Calculating ... :}`
      );
      return square;
    }
  };
}

const memoSquare = memoizedSquare();
console.log(memoSquare(2));
console.log(memoSquare(5));
console.log(memoSquare(5));
console.log(memoSquare(2));
console.log(memoSquare(10));
console.log(memoSquare(10));

// Similar problem but more generic

function memoize(callback) {
  let cache = {};
  return function (...args) {
    const key = args.toString();
    if (key in cache) {
      console.log('Returning from cache');
      return cache[key];
    } else {
      console.log('Computing result');
      const result = callback(...args);
      cache[key] = result;
      return result;
    }
  };
}

function add(a, b) {
  return a + b;
}
const memoAdd = memoize(add);
console.log(memoAdd(2, 4));
console.log(memoAdd(2, 4));
console.log(memoAdd(1, 9));
console.log(memoAdd(1, 9));
