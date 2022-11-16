"use strict";
// // Write a function that takes two numbers, say x and y, as arguments
// // Check if x is divisible by y
// // If yes, return x
// // If not, return the next higher natural number that is divisible by y
// // V1
// function myFunction2(x: number, y: number) {
//   if (x % y === 0) {
//     return x;
//   } else if (x < 0) {
//     return 0;
//   } else {
//     return myFunction2(x + 1, y);
//   }
// }
// // console.log(myFunction2(1, 23));
// // console.log(myFunction2(23, 23));
// // console.log(myFunction2(7, 3));
// // console.log(myFunction2(-5, 7));
// //V2
// function myFunction3(x, y) {
//   while (x % y !== 0) x++;
//   return x;
// }
// console.log(myFunction3(1, 23));
// console.log(myFunction3(23, 23));
// console.log(myFunction3(7, 3));
// console.log(myFunction3(-5, 7));
// //-------------------------------------------------------
// // Write a function that takes two numbers (a and b) as argument
// // Return b percent of a
// function percentCalc(a, b) {
//   return (a / b) * 100;
// }
// console.log(percentCalc(100, 50));
// console.log(percentCalc(10, 1));
// console.log(percentCalc(500, 25));
// // Write a function that takes two strings (a and b) as arguments
// // Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// // // Return the resulting string
// const insertString = (a: string, b: string) => {
//   let arr = a.split('');
//   for (let i = arr.length - 3; i > 0; i -= 3) {
//     arr.splice(i, 0, b);
//   }
//   return arr.join('');
// };
// // console.log(insertString('abcde', '$')); //'ab$cde'
// // console.log(insertString('1234567', '.')); //'1.234.567'
// // console.log(insertString('zxyzxyzxyzxyzxyz', 'w')); //'zwxyzwxyzwxyzwxyzwxyz'
// // // ----------------------------------------------------------------------------
// // let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// // console.log(arr1);
// // console.log(arr1.splice(2, 3, 'insert1', 'insert2'));
// // console.log(arr1);
// //---------------------------------------------------------------------------------
// // Write a function that takes a string as argument
// // As it is, the string has no meaning
// // Increment each letter to the next letter in the alphabet
// // Return the correct word
// const nextLetter = (inputStr: string) => {
//   let alphabet = Array(26)
//     .fill(0)
//     .map((val, i) => String.fromCharCode(i + 97))
//     .reduce((acc, val) => {
//       for (let i = 0; i <= inputStr.length; ) {}
//       return acc;
//     }, []);
//   return alphabet;
// };
// console.log(nextLetter('bnchmf')); //'coding'
// console.log(nextLetter('bgddrd')); //'cheese';
// console.log(nextLetter('sdrshmf')); //
// //===========================================================================
// //Write a function that takes two numbers (a and b) as arguments. If a is smaller than b, divide a by b. Otherwise, multiply both numbers. Return the resulting value
// const divOperatrorFunc = (a: number, b: number) => (a < b ? a / b : a * b);
// console.log(divOperatrorFunc(2, 0.5));
// //=========================================================================
// //Round a to the 2nd digit after the comma. Return the rounded number
// const roundFunc = (a: number) => Number(a.toFixed(2));
// console.log(roundFunc(2.123495));
// //=========================================================================
// //Split a into its individual digits and return them in an array
// const splitNumberInDigits = (inputNumber: number) =>
//   inputNumber
//     .toString()
//     .split('')
//     .map((str) => Number(str));
// console.log(splitNumberInDigits(1000));
// //=========================================================================
// //Clear up the chaos behind these strings: 'java', 'tpi%rcs' => 'Javascript'; 'c%ountry', 'edis' => 'Countryside' ; 'down', 'nw%ot' => 'Downtown'
// const strFix = (str1: string, str2: string) => {
//   str1 = (str1.charAt(0).toUpperCase() + str1.slice(1))
//     .split('')
//     .filter((char) => char !== '%')
//     .join('');
//   str2 = str2
//     .split('')
//     .reverse()
//     .filter((char) => char !== '%')
//     .join('');
//   return str1 + str2;
// };
// console.log(strFix('java', 'tpi%rcs'));
// console.log(strFix('c%ountry', 'edis'));
// console.log(strFix('down', 'nw%ot'));
//===========================================================================
//If a is prime, return a. If not, return the next higher prime number
const primeNextPrime = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return primeNextPrime(num + 1);
        }
    }
    return num;
};
console.log(primeNextPrime(38));
console.log(primeNextPrime(7));
console.log(primeNextPrime(115));
console.log(primeNextPrime(2000));
//===========================================================================
// Write a function that takes two numbers, say x and y, as arguments. Check if x is divisible by y. If yes, return x. If not, return the next higher natural number that is divisible by y
const nextNumDivisible1 = (x, y) => {
    if (x % y === 0) {
        return x;
    }
    else if (x < 0) {
        return 0;
    }
    else {
        return nextNumDivisible1(x + 1, y);
    }
};
// console.log(nextNumDivisible1(1, 23));
// console.log(nextNumDivisible1(23, 23));
// console.log(nextNumDivisible1(7, 3));
// console.log(nextNumDivisible1(-5, 7));
const nextNumDivisible2 = (x, y) => {
    while (x % y !== 0)
        x++;
    return x;
};
console.log(nextNumDivisible2(1, 23));
console.log(nextNumDivisible2(23, 23));
console.log(nextNumDivisible2(7, 3));
console.log(nextNumDivisible2(-5, 7));
//# sourceMappingURL=test.js.map