"use strict";
/**
 *********** Generators ****************
 * Generators were introduced in ES6 and allow you to define an iterative behaviour by writing a single function whose   execution is not continuous
 * Generator function are written using the 'function*' syntax
 * When called the generator function don't initially execute the code. Instead, the return a special type of iterator,called the 'Generator Object'
 * When a value is consumed by calling the generator's next() method, the Generator function executes until it encounters the 'yield' keyword
 * A Generator function can be called multiple times, and it returns a new Generator Object each time
 * Each Generator Object may only be iterated once
 */
/*
*********  Normal Function *********

* Can not be stopped: Run to completion model
* 'Hello''World'
* Exit by returning or trowing an error
* If you call the function again it will begin execution from the top / beginning
 */
function* normalFunction1() {
    console.log('Hello');
    console.log('World');
}
/* *********  Generator Function *********

* A generator is a function that can stop midway and then continue from where it stopped
* A generator function can pause the execution
* To achieve that behaviour, we use the 'yield' keyword
* 'yield' is an operator with which a generator can pause itself
* Every time a  generator encounters the 'yield' operator it 'yields' the value specified after it
 */
function* generatorFunction2() {
    yield 'Hello';
    yield 'World';
}
/**
 * 1. A generator can use the return keyword. However, 'return' set the {done:true} after which the gen cannot generate any more values :
 */
function* generatorFunction3() {
    yield 'First';
    return 'End'; // -> Generator ends here.
    yield 'Last'; // -> Will never be executed
}
/**
 * 2. If I return a value, rather then yield the value, the returned value will not be iterated over in a 'for of' loop or a spread operator
 */
function* generatorFunction4() {
    yield '1';
    yield '2';
    return '3';
}
const generatorObject4 = generatorFunction4();
// for (const num of generatorObject4) {
//   console.log(num); // => 1, 2
// }
console.log(generatorObject4.next());
console.log(generatorObject4.next());
console.log(generatorObject4.next());
//# sourceMappingURL=test.js.map