/** Promise
 *What?
    * A promise is simply an object
    
    A promise is always in one of the three states:
          * pending:  which is the initial state of a promise, neither fulfilled or rejected
          * fulfilled: the operation completed successfully 
          * rejected: the operation failed 
 *Why?
    * Promises can help deal with the asynchronous code in a far more simpler way compared to callbacks
    * Callback hell can be avoided with promises
 *JS
    1.Promise
    2.Promise Value
    3.Fulfill promise
    4.Reject promise
    5.Success callback
    6.Failure calLback
 * */
// a.How to create a promise?
const promise1 = new Promise();
// b.How to fulfill or reject a promise
const promise2 = new Promise((resolve, reject) => {}); // resolve and reject are functions :

const promise3 = new Promise((resolve, reject) => {
  //change the status from 'pending' to 'fulfilled'
  resolve();
});

const promise4 = new Promise((resolve, reject) => {
  //change status from 'pending' to 'rejected'
  reject();
});

// c.HOw to execute a callback function based on whether the Promise is fulfill or rejected

// *******  Resolve scenario ----------------------------------------------------
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //Change status from 'pending' to 'fulfill'
    resolve();
  }, 5000);
});

//*********  Reject scenario
const promise = new Promise((resolve, reject) => {
  //Change status from 'pending' to 'rejected'
  reject();
}, 5000);

promise.then(onFulfillment);
promise.catch(onRejection);

//********************* Success and Failure callbacks ----------------------------
const onFulfillment = (result) => {
  // some code to process the result
  console.log(result);
};

const onRejection = (error) => {
  // code for error handling
  console.log(error);
};
