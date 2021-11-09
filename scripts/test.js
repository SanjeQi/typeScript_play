"use strict";
// /** Promise
//  *What?
//     * A promise is simply an object
//     A promise is always in one of the three states:
//           * pending:  which is the initial state of a promise, neither fulfilled or rejected
//           * fulfilled: the operation completed successfully
//           * rejected: the operation failed
//  *Why?
//     * Promises can help deal with the asynchronous code in a far more simpler way compared to callbacks
//     * Callback hell can be avoided with promises
//  *JS
//     1.Promise
//     2.Promise Value
//     3.Fulfill promise
//     4.Reject promise
//     5.Success callback
//     6.Failure calLback
//  * */
// // a.How to create a promise?
// const promise1 = new Promise();
// // b.How to fulfill or reject a promise
// const promise2 = new Promise((resolve, reject) => {}); // resolve and reject are functions :
// const promise3 = new Promise((resolve, reject) => {
//   //change the status from 'pending' to 'fulfilled'
//   resolve();
// });
// const promise4 = new Promise((resolve, reject) => {
//   //change status from 'pending' to 'rejected'
//   reject();
// });
// // c.HOw to execute a callback function based on whether the Promise is fulfill or rejected
// // *******  Resolve scenario ----------------------------------------------------
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     //Change status from 'pending' to 'fulfill'
//     resolve();
//   }, 5000);
// });
// //*********  Reject scenario
// const promise = new Promise((resolve, reject) => {
//   //Change status from 'pending' to 'rejected'
//   reject();
// }, 5000);
// promise.then(onFulfillment);
// promise.catch(onRejection);
// //********************* Success and Failure callbacks ----------------------------
// const onFulfillment = (result) => {
//   // some code to process the result
//   console.log(result);
// };
// const onRejection = (error) => {
//   // code for error handling
//   console.log(error);
// };
// //******************** Chaining Promises  ---------------------------- */
// promise.then(onFulfillment).catch(onRejection);
// Both then() and catch() return promises, and they can be chained
// ******************** Promise - Static methods ************************ ------------------
// *********** Promise.all() -------------------------------------------------------------------------
// Query multiple API's and perform some action but only after all the API's have finished loading
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});
Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
});
//=> [3, 42, 'foo']
/**
 * Promise.all() method takes an iterable of promises as an input and returns a single Promise that resolves to an array of the results of the input Promises.
  
 * Returned Promise will resolve when all the input promises have been resolved, or if the input iterable contains no Promises

* It rejects immediately if any of the input promises reject or the non-promises throw an error, and will reject with the first rejection/error
 */
// *********** Promise.allSettled() -------------------------------------------------------------------------
Promise.allSettled([promise1, promise2, promise3]).then((values) => {
    console.log(values);
});
/*  =>
(3) [{…}, {…}, {…}]
0: {status: 'fulfilled', value: 3}
1: {status: 'fulfilled', value: 42}
2: {status: 'fulfilled', value: 'foo'}
length: 3
[[Prototype]]: Array(0)
*/
//Promise.allSettled() waits for all input promises to complete regardless of whether or not one of them is rejected
// *********** Promise.race() -------------------------------------------------------------------------
// Returns promise that fulfills or rejects as soon as one of the input promises fulfills or rejects, with the value or reason from that promise
const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'four');
});
const promise5 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'five');
});
Promise.race([promise4, promise5]).then((value) => {
    console.log(value);
});
//# sourceMappingURL=test.js.map