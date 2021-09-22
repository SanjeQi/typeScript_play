//Function Currying

//What is Function Currying?
//!!currying is a process in functional programing in which we transform a function with multiple arguments into a sequence of nesting functions that take one argument at a time **** f(a,b,c) into f(a)(b)(c)
//!!!currying doesn't call a function.It simply transform it

//Currying is possible because of closures ***  When we return a function from another function ,we are returning the function along with its lexical scope *** Lexical scope takes the outer function parameters into consideration ***

function sum(a, b, c) {
  return a + b + c;
}
// console.log(sum(1, 2, 4));

//Transform sum(a,b,c) to sum(a)(b)(c)

// function curry (fn){
//     //return curried version of the function
// }

function curry(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}

const curriedSum = curry(sum);
console.log(curriedSum(2)(3)(5));

//Practical Example - A logging function
function log(date, importance, message) {
  console.log(
    `[${date.getHours()}:${date.getMinutes()}] [#${importance}] ${message}`
  );
}
log(new Date(), 'Error', 'name cannot be null');

const curriedLog = curry(log);
curriedLog(new Date())('Error')('name cannot be null');

const logNow = curriedLog(new Date());
logNow('Error')('name cannot be null');
logNow('Info')('user logged out');

const logErrorNow = logNow('Error');
logErrorNow('name cannot be null');
logErrorNow('Reference error');

// Ex
const multiply = (x, y) => x * y;
const curriedMultiply = (x) => (y) => x * y;

console.log(multiply(2, 3));
console.log(curriedMultiply(2));
console.log(curriedMultiply(2)(3));

//Partially applied functions are common use of currying
const timesTen = curriedMultiply(10);
console.log(timesTen(3));
console.log(timesTen(8));

//Another example
const updateElementText = (id) => (content) =>
  (document.querySelector(`#${id}`).textContent = content);
const updateHeaderText = updateElementText('header');
updateHeaderText('Cosmo Kramer');
