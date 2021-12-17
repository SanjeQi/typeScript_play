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
/*
 ------------------------------ Prime Numbers  -----------------------------------------
Given two numbers min and max, find all the prime numbers in the range of min to max. (min and max included)

Test Case
function printPrime (min, max) {}

printPrime(0, 20) - Returns 2 3 5 7 11 13 17 19
*/
// check is a number is a prime number ---------------------------- v1
const isPrime_1 = (num) => {
    if (num < 2) {
        return false;
    }
    //modulus %
    let root = Math.ceil(Math.sqrt(num));
    console.log(root);
    for (let i = 2; i <= root; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};
// check is a number is a prime number ---------------------------- V2
const isPrime_2 = (num) => {
    let primeFlag = true;
    for (let i = 2; i < num / 2; i++) {
        if (num % i === 0) {
            primeFlag = false;
            break;
        }
    }
    if (primeFlag) {
        console.log(num);
    }
};
const printPrime = (min, max) => {
    for (let i = min; i <= max; i++) {
        if (i === 0 || i === 1) {
            continue;
        }
        isPrime_2(i);
    }
};
console.log(printPrime(0, 20));
/*---------------------------------------------------------- Palindrome ------------------------------------------------
Given a string (str), determine if it is a palindrome.

Note: A plaindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam.

Test Case

function isPalindrome (str) {}

isPalindrome('racecar') - Returns true
isPalindrome('race') - Returns false
*/
const isPalindrome = (str) => {
    return str.toLowerCase() === str.toLowerCase().split('').reverse().join('');
};
console.log(isPalindrome('Racecar'));
/* ------------------------------------------------------General Palindrome---------------------------------------------
A more precise isPalindrome function defined below
\W matches any non-word character (equal to [^a-zA-Z0-9_])
_ matches the character _ literally (case sensitive)

*/
function isPalindromeGen(str) {
    return (str.replace(/[\W_]/g, '').toLowerCase() ===
        str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join(''));
}
console.log(isPalindromeGen('racecar'));
/**
 * ---------------------------------------------------- Anagram --------------------------------------------------------
 *
Given two strings (str1 and str2), determine if str1 is anagram of str2.

Note: An anagram is a word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

Test Case
function isAnagram (str) {}

isAnagram('racecar', 'carrace') - Returns true
isAnagram('racecar', 'carracr') - Returns false
 */
//V1  ----------------------------------------------------
const isAnagram = (str1, str2) => {
    if (typeof str1 === 'string' &&
        typeof str2 === 'string' &&
        str1.length === str2.length) {
        return (str1.toLowerCase().split('').sort().join('') ===
            str2.toLowerCase().split('').sort().join(''));
    }
    else {
        return `${str1} is not an Anagram of ${str2}`;
    }
};
console.log(isAnagram('racecar', 'carrac'));
console.log(isAnagram('racecar', 'carrace'));
console.log(isAnagram('rac', 'car'));
//V2 -----------------------------------------------------
const sortString = (str) => {
    if (!str) {
        return;
    }
    return str.toLowerCase().split('').sort().join('');
};
const isAnagram2 = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }
    return sortString(str1) === sortString(str2);
};
console.log('------------------');
console.log(isAnagram2('racecar', 'carrac'));
console.log(isAnagram2('racecar', 'carrace'));
console.log(isAnagram2('rac', 'car'));
/**
 * --------------------------------------------------- Reverse Words ---------------------------------------------------
 *Given an input string (str), reverse the string word by word.

Note:
1. Your reversed string should not contain leading or trailing spaces
2. You need to reduce multiple spaces between two words to a single space in the reversed string.

Test Case
function reverseWords (str) {}

reverseWords('Hello World') - Returns 'World Hello'
reverseWords(' This is  a  test string ') - Returns 'string test a is This'
 
 */
//V1
function reverseWords(str) {
    return str.trim().split(/\s+/).reverse().join(' ');
}
//V2
const reverse = (str) => {
    return str.split(' ').filter(Boolean).reverse().join(' ');
};
console.log(reverseWords('This is a test string version one'));
console.log(reverse('This is a test string version two'));
/*
* --------------------------------------------------- Remove Vowels from a String -------------------------------------
Given an input string (str), remove all vowels from the string.

function removeVowels (str) {}

removeVowels('Hello World') - Returns Hll Wrld
*/
//V1
const removeVowels1 = (str) => {
    // g - global, i - case insensitive
    return str.replace(/[aeiou]/gi, '');
};
//V2
const keepConsonants = (str) => {
    const voc = ['a', 'e', 'i', 'o', 'u'];
    return str
        .split('')
        .filter((letter) => !voc.includes(letter))
        .join('');
};
console.log(removeVowels1('Hello World version one'));
console.log(keepConsonants('Hello World version two'));
/*
 *--------------------------------------------------- Array of Objects_Getting stuff out.map ---------------------------
 */
const names = [
    { firstname: 'Bruce', lastname: 'Wayne' },
    { firstname: 'Clark', lastname: 'Kent' },
];
const fullnames = (arr) => {
    return arr.map((name) => {
        return `${name.firstname} ${name.lastname}`;
    });
};
console.log(fullnames(names));
/*
---------------------------------------------------  Longest Word in a String ------------------------------------------
 Longest Word in a String
Given a string (str), find the longest word in the string.

Note: If one more more words have the same length, return the first occurring word of the same length.

function longestWord (str) {}

longestWord('My name is Superman') - Returns 'Superman'
longestWord('Hello world') - Returns 'Hello'
*/
const longestWord = (str) => {
    return str.split(' ').reduce((acc, val) => {
        if (val.length > acc.length) {
            acc = val;
        }
        return acc;
    }, '');
};
console.log(longestWord('My name is Superman'));
console.log(longestWord('Batman has very expensive gear'));
console.log(longestWord('m am   am a'));
/*
--------------------------------------------------- Two arrays  -splice()  ------------------------------------------
 
Given two arrays of integers (nums) and (index), create and return a new array (arr) which satisfies the following :

From left to right read nums[i] and index[i] and insert at index index[i] the value nums[i] in array (arr) .

Repeat the previous step until there are no elements to read in nums and index.

Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]

createArray(nums, index) - Returns [0,4,1,3,2]
*/
function createArray(nums, index) {
    let target = [];
    for (let i = 0; i < nums.length; i++) {
        target.splice(index[i], 0, nums[i]);
    }
    return target;
}
const nums = [0, 1, 2, 3, 4];
const index = [0, 1, 2, 2, 1];
console.log(createArray(nums, index));
/*
-------------------------------------------- Union Intersection Difference ------------------------------------
Given two arrays (arr1) and (arr2) return the union, intersection, difference and symmetric difference of the two arrays.

 arr1 = [1, 2, 3]
 arr2 = [2, 3, 4]

union(arr1, arr2) - Returns [1, 2, 3, 2, 3, 4]
intersection(arr1, arr2) - Returns [2, 3]
difference(arr1, arr2) - Returns [1]
difference(arr2, arr1) - Returns [4]
symmetricDifference(arr1, arr2) - Returns [1, 4]
*/
const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];
// ---------Union ------------------------------------
//V1
const union1 = (arr1, arr2) => {
    return [...arr1, ...arr2];
};
//V2
const union2 = (arr1, arr2) => {
    const union = arr1.concat(arr2);
    return union;
};
// ---------Intersection -----------------------------
const instersection = (arr1, arr2) => {
    return arr1.filter((item) => arr2.includes(item));
};
// --------- Difference -----------------------------
const difference1 = (arr1, arr2) => {
    return arr1.filter((el) => !arr2.includes(el));
};
// --------- Symetric Difference -----------------------------
const symetricDiff = (arr1, arr2) => {
    return arr1
        .filter((el) => !arr2.includes(el))
        .concat(arr2)
        .filter((el) => !arr1.includes(el));
};
// ----------------------------------------------------
console.log('union1:', union1(arr1, arr2));
console.log('union2:', union2(arr1, arr2));
console.log('intersection', instersection(arr1, arr2));
console.log('difference1', difference1(arr1, arr2));
console.log('difference1', difference1(arr2, arr1));
console.log('symetricDiff', symetricDiff(arr1, arr2));
/*
-------------------------------------------- Flatten Array ------------------------------------
Given a nested array (arr), return the flattened array.

input: arr = [1, [2], [3, [[4]]]]
flattenArray(arr) - Returns [1, 2, 3, 4]
*/
const arr = [1, [2], [3, [[4]]]];
const arr11 = [[1], 2, [3, [4], 5], 6, [7], 8, [9], [10, [11, 12, [13, 14]]]];
const flattenArray = (arr) => {
    return arr.reduce((acc, el) => {
        if (Array.isArray(el)) {
            acc = acc.concat(flattenArray(el));
        }
        else {
            acc = acc.concat(el);
        }
        return acc;
    }, []);
};
console.log(flattenArray(arr));
console.log(flattenArray(arr11));
/*
------------------------------- Duplicate Elements -------------------------------
Given an array (arr) of elements, one element in the array occurs twice. Find the element.

function findDuplicate(arr) {}

input: arr = [2,4,6,8,2]

findDuplicate(arr) - Returns 2
*/
const arrSample = [2, 4, 6, 8, 2, 4, 8, 6, 10];
//V1 for only the first duplicate element
const findDuplicateElement = (arr) => {
    const unique = [...new Set(arr)];
    return arr.find((num) => unique.includes(num));
};
//V2 Multiple duplicates
const findDuplicateElements = (arr) => {
    const duplicates = [];
    const set = new Set();
    for (const element of arr) {
        if (!set.has(element)) {
            set.add(element);
        }
        else {
            duplicates.push(element);
        }
    }
    return duplicates.sort();
};
console.log(findDuplicateElement(arrSample));
console.log(findDuplicateElements(arrSample));
/*
 ---------------------------------------Non Repeating Words ---------------------------------------d
Given two strings (str1) and (str2), return a list of all non-repeating words.

function nonRepeatingWords(str1, str2) {}

Inputs:
str1 = 'Hello world'
str2 = 'Hello Clark'
nonRepeatingWords(str1, str2) - Returns ['world', 'Clark']

Inputs:
str1 = 'Hello Hello'
str2 = 'Welcome Clark'
nonRepeatingWords(str1, str2) - Returns ['Welcome', 'Clark']
*/
const str1 = 'Hello Hello';
const str2 = 'Welcome Clark';
const str3 = 'Hello world';
const str4 = 'Hello Clark';
const nonRepeatingWords = (str1, str2) => {
    const map = new Map();
    const res = [];
    const str = `${str1} ${str2}`;
    //Counting the occurence of each word
    str.split(' ').forEach((word) => {
        map.has(word) ? map.set(word, map.get(word) + 1) : map.set(word, 1);
    });
    //Select words which occur only once(value = 1 in the map )
    for (let [key, value] of map) {
        if (value === 1) {
            res.push(key);
        }
    }
    return res;
};
//--------------------------------------------
console.log(nonRepeatingWords(str1, str2));
console.log(nonRepeatingWords(str3, str4));
//# sourceMappingURL=test.js.map