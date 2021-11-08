/**
 * ********* Callbacks *******
 *
 * Callbacks are functions passed as arguments to other functions
 * They can be synchronous if they execute immediately or they can be asynchronous where they get executed after some time has passed,some event has occured or some data has been fetched
 * As more and more request had to be made based on the data obtained from the previous requests,developer started to encounter what is known as the callbacks hell
 * Callback hell makes the code difficult to reason about
 * An alternative and the recommend approach now is to use Promises
 */

// Synchronous Callbacks - invoked immediately

function greet(name) {
  console.log(`Hello my name is ${name}`);
}
function higherOrderFunction(callback) {
  const name = 'Bruce Wayne';
  callback(name);
}

////A Higher Order Function is a function that accepts a callback as an argument or it returns another function
higherOrderFunction(greet);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const sort = numbers.sort((a, b) => a - b);
const map = numbers.map((n) => n * 2);
const filter = numbers.filter((n) => n % 2 === 0);
console.log(sort, map, filter);

//Asynchronous Callbacks used to delay the execution of a function until a particular time or event has occurred(data fetching)

setTimeout(greet, 2000, 'Clark Kent');

function callback() {
  document.getElementById('demo').innerHTML = 'Change of text holder';
}
Document.getElementById('demo').addEventListener('click', callback); // it waits for click to run the callback()
