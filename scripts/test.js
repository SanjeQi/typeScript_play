"use strict";
/*
------------------------------------ Sum of Numbers -------------------------------------------------
You are given an array of two numbers [a,b]. Find the sum of those two numbers plus the sum of all the numbers between them.

(Note: The lower number may not always be the first element in the array)



Test Case

function sum(arr) {}

sum([1, 4]) - Returns 10
sum([4, 1]) - Returns 10
*/
function sum(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    let acc = 0;
    for (let i = min; i <= max; i++) {
        acc += i;
    }
    return acc;
}
/*
 ------------------------------ Factorial of a Number -----------------------------------------
Give an integer (num), find the factorial of that integer.

If the integer is represented as num, the factorial of num is the product of all positive integers less than or equal to num.

Example
Factorial of 4 = 4 * 3 * 2 * 1
Factorial of 4 = 24

Test Case
function factorial(num) {}

factorial(0) - Returns 1
factorial(1) - Returns 1
factorial(4) - Returns 24
factorial(5) - Returns 120
*/
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
}
console.log(factorial(5));
/*
 ------------------------------ Fibonacci Sequence  -----------------------------------------
Give a number n, find the first n elements of the fibonacci series.

Now what is fibonacci series?  each number ( Fibonacci number ) is the sum of the two preceding numbers.

The first two numbers in the series are 0 and 1.

Test Case

function printFibonacci(n) {}

printFibonacci(2) - Returns 0 1
printFibonacci(7) - Returns 0 1 1 2 3 5 8

*/
// v1 Recursion
function fib(n) {
    if (n < 2) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}
function printFibonacci(n) {
    for (let i = 0; i < n; i++) {
        console.log(fib(i));
    }
}
printFibonacci(12);
//V2 Recursion
const fib2 = (num, arr = [0, 1]) => {
    if (num < 2)
        return arr;
    const [nextToLast, last] = arr.slice(-2);
    return fib2(num - 1, [...arr, nextToLast + last]);
};
console.log(fib2(12));
// What number is in the nth position of the Fibonacci Sequence with no recursion?
const fibonacciPos = (pos) => {
    if (pos <= 1)
        return pos;
    const seq = [0, 1];
    for (let i = 2; i <= pos; i++) {
        const [nextToLast, last] = seq.slice(-2);
        seq.push(nextToLast + last);
    }
    return seq[pos];
};
console.log(fibonacciPos(8));
const fibonacciPos1 = (pos) => {
    if (pos < 2) {
        return pos;
    }
    return fibonacciPos1(pos - 1) + fibonacciPos1(pos - 2);
};
console.log(fibonacciPos1(8));
// Getting stuff from a deep tree data structure
const tree = {
    name: 'John',
    children: [
        {
            name: 'Jim',
            children: [],
        },
        {
            name: 'Zoe',
            children: [
                { name: 'Rob', children: [] },
                {
                    name: 'Karen',
                    children: [
                        {
                            name: 'Diana',
                            children: [
                                { name: 'Denis', children: [] },
                                {
                                    name: 'Patrick',
                                    children: [
                                        { name: 'Chris', children: [] },
                                        {
                                            name: 'Tom',
                                            children: [],
                                        },
                                    ],
                                },
                            ],
                        },
                        { name: 'Bob', children: [] },
                    ],
                },
            ],
        },
    ],
};
const printChildrenRecursive = (t) => {
    if (t.children.length === 0) {
        return;
    }
    t.children.forEach((child) => {
        console.log(child.name);
        printChildrenRecursive(child);
    });
};
printChildrenRecursive(tree);
/*
printChildrenRecursive('John')
  printChildrenRecursive('Jim')
  return
  printChildrenRecursive('Zoe')
   printChildrenRecursive('Rob')
   return
   printChildrenRecursive('Karen')
    .....


*/
//# sourceMappingURL=test.js.map