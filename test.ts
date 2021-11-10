/**
 * async
 *
 * The async keyword is used to declare sync functions
 * Async functions are functions that are instances of the AsyncFunction constructor
 * Unlike normal functions, async functions always return a promise
 */

//Regular function
function greetRegular() {
  return 'Hello from regular function';
}
greetRegular(); // => 'Hello from regular function'

//Async function

async function greetAsync() {
  return 'Hello form async function';
}
greetAsync(); // => Promise {<fulfilled>: 'Hello form async function'}

//or the same result

async function greetAsync1() {
  return Promise.resolve('Hello from async function 1 ');
}
greetAsync1().then((value) => {
  console.log(value);
});

/*
 * await
 *
 * await keyword can be put in front of any async promise based function to pause the code until that promise settles 
 and return its result.
 * await only works with async functions. Cannot use await in regular functions
 */

async function greetOneSec() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello');
    }, 1000);
  });

  let result = await promise; // wait until the promise resolves
  console.log(result);
}

greetOneSec();

// Sequential vs Concurrent vs Parallel Execution

function resolveHello() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Hello from resolveHello Function');
    }, 2000);
  });
}

function resolveWorld() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('World');
    }, 1000);
  });
}

// Sequential Execution Concurrent -----------------------------------
async function sequentialStart() {
  const hello = await resolveHello();
  console.log(hello, 'sequential'); // Logs after 2 seconds

  const world = await resolveWorld();
  console.log(world, 'sequential'); // Logs after 2 + 1 seconds
}
sequentialStart(); // => 'Hello' 'World' // total time: 3 seconds

// Concurrent Execution ---------------------------------------------

async function concurrentStart() {
  const hello = resolveHello();
  const world = resolveWorld();
  console.log(await hello, 'concurrent'); // Logs after 2 sec
  console.log(await world, 'concurrent'); // Logs after 2 sec
}
concurrentStart(); // => 'Hello' 'World' // total time: 2 seconds

//  Parallel Execution --------------------------------------------- running whatever code resolves first

function parallel() {
  Promise.all([
    async () => {
      console.log(await resolveHello()); // Logs after 2 sec
    },
    async () => {
      console.log(await resolveWorld()); // Logs after 1 sec
    },
  ]);
}
parallel(); // => 'World' 'Hello' //total time: 2 seconds  ----< reversed

async function parallel1() {
  await Promise.all([
    async () => {
      console.log(await resolveHello()); // Logs after 2 sec
    },
    async () => {
      console.log(await resolveWorld()); // Logs after 1 sec
    },
  ]);
  console.log('Finally'); // Logs after World Hello
}
parallel1();

// Define a function called sleep which accepts a duration parameter
// The sleep function should suspend the execution of the function  it is invoked in

function sleep(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

async function main() {
  console.log('Logs immediately');
  await sleep(8000);
  console.log('Logs after 8 seconds');
}

main();
