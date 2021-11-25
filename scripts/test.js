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
//# sourceMappingURL=test.js.map