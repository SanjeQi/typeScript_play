"use strict";
// Asynchronous JavaScript - Timeouts and Intervals
// Timeouts and Intervals
/*
1. Timers and intervals are not part of JavaScript itself. They are implemented by the browser and setTimeout and    setInterval are basically names given to that functionality in JS
2. The duration passed to setInterval() and setTimeout() is the minimum delay, not the guaranteed delay.
3. It is possible to achieve the dame effect as setInterval with a recursive setTimeout()
      3.1 Duration is guaranteed between executions:
      setTimeout(function run(){
        console.log('some text')
        setTimeout(run,100)
      },100)
      3.2 The duration interval includes the time taken to execute the code I want to run:
      setInterval(function run(){
        console.log('some other text');
      },100)

*/
/** ********** ****** setTimeout()  **********
      * executes a particular block of code once, after a specified time has elapsed
      
setTimeout(fn, duration, param1, param2,...);
        
      -fn - first parameter is a function to run, or a reference to a function define elsewhere;
      -duration - second parameter is a number representing the duration in milliseconds to wait before executing the   code;
      -param1, param2 etc - after the second parameter: duration, I can pass any number of arguments that I want to pass to the function when it runs;

      */
//V1
function greet1() {
    console.log('Hello again');
}
setTimeout(greet1, 500); // "Hello again" will be logged to the console after 5s
//V2
function greet2(name) {
    console.log(`Hello again ${name}`);
}
setTimeout(greet2, 200, 'Bruce Wayne'); //=> Hello again Bruce Wayne
/* ************ clearTimeout()  ************
      - To clear a timeout, I can use the clearTimeout() method passing in the identifier returned by setTimeout
      - Practical application is clearing the timeouts when the component is unmounting to free up resources and also to prevent code from executing incorrectly on an unmounted component
*/
function greet3() {
    console.log('Ola');
}
const timeoutId = setTimeout(greet3, 800);
console.log(timeoutId); //=> 3
// clearing the timeout with the id 3
clearTimeout(timeoutId);
/** ********** ****** setInterval()  **********
      * executes the code over and over again at regular intervals
      
setInterval(fn, duration, param1, param2,...);
        
      -fn -first param is the code to execute
      -duration - the duration in milliseconds until the next execution of the code
      -param1, param2 etc - after the second parameter: duration, I can pass any number of arguments that I want to pass to the function when it runs;
      -intervals keep running a task forever so they must be cleared when not needed anymore.

      */
const intervalId = setInterval(greet2, 200, 'Clarke Kent');
clearInterval(intervalId);
/*
************** Practice - implement debounce and throttle functions using setTimeout() ******
*What are they?
Debouncing and throttling are techniques to enhance a website performance, prevent you  form making unnecessary API calls and pilling up the load on the server.

*How do they do that?
Debouncing and throttling techniques limit the number of times a function can execute. Ex: functions attached to mouse move, window size, auto complete, keyup

*This technique of limiting the numbers of times the user can call a function attached to an event listener is called  debouncing and throttling

Throttling is a technique in which, no matter how many times the user fires the event, the attached function will be executed only once in a given time interval

Debouncing is a technique in which, no matter how many times the user fires the event, the attached function will be executed only after a specified time, once the user stops firing the event
*/
//Throttle function
function throttleEx(fn, time) {
    //->   return throttle fn
}
function throttle(fn, time) {
    let throttle;
    return function () {
        if (!throttle) {
            fn.apply(this, arguments);
            throttle = true;
            setTimeout(() => {
                throttle = false;
            }, time);
        }
    };
}
const logger = (args) => {
    console.log('Log data', args);
};
const throttleLogger = throttle(logger, 5000);
throttleLogger(1); // -> Log data 1
throttleLogger(2); // will not execute
throttleLogger(3); // will not execute
throttleLogger(4); // will not execute
// Debounce Function
function debounce(fn, wait) {
    let timer;
    return function () {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments);
        }, wait);
    };
}
const debounceLogger = debounce(logger, 2000);
debounceLogger(1);
debounceLogger(2);
debounceLogger(3);
debounceLogger(4);
debounceLogger(5); //-> Log data 5
//# sourceMappingURL=test.js.map