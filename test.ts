// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y

// V1
function myFunction2(x: number, y: number) {
  if (x % y === 0) {
    return x;
  } else if (x < 0) {
    return 0;
  } else {
    return myFunction2(x + 1, y);
  }
}

// console.log(myFunction2(1, 23));
// console.log(myFunction2(23, 23));
// console.log(myFunction2(7, 3));
// console.log(myFunction2(-5, 7));

//V2
function myFunction3(x, y) {
  while (x % y !== 0) x++;
  return x;
}

console.log(myFunction3(1, 23));
console.log(myFunction3(23, 23));
console.log(myFunction3(7, 3));
console.log(myFunction3(-5, 7));
//-------------------------------------------------------

// Write a function that takes two numbers (a and b) as argument
// Return b percent of a

function percentCalc(a, b) {
  return (a / b) * 100;
}

console.log(percentCalc(100, 50));
console.log(percentCalc(10, 1));
console.log(percentCalc(500, 25));

// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// // Return the resulting string

const insertString = (a: string, b: string) => {
  let arr = a.split('');
  for (let i = arr.length - 3; i > 0; i -= 3) {
    arr.splice(i, 0, b);
  }
  return arr.join('');
};

console.log(insertString('abcde', '$')); //'ab$cde'
console.log(insertString('1234567', '.')); //'1.234.567'
console.log(insertString('zxyzxyzxyzxyzxyz', 'w')); //'zwxyzwxyzwxyzwxyzwxyz'
//===========================================================================
//Write a function that takes two numbers (a and b) as arguments. If a is smaller than b, divide a by b. Otherwise, multiply both numbers. Return the resulting value
const divOperatrorFunc = (a: number, b: number) => (a < b ? a / b : a * b);
console.log(divOperatrorFunc(2, 0.5));
//=========================================================================
//Round a to the 2nd digit after the comma. Return the rounded number
const roundFunc = (a: number) => Number(a.toFixed(2));
console.log(roundFunc(2.123495));
//=========================================================================
//Split a into its individual digits and return them in an array
const splitNumberInDigits = (inputNumber: number) =>
  inputNumber
    .toString()
    .split('')
    .map((str) => Number(str));
console.log(splitNumberInDigits(1000));
//=========================================================================
//Clear up the chaos behind these strings: 'java', 'tpi%rcs' => 'Javascript'; 'c%ountry', 'edis' => 'Countryside' ; 'down', 'nw%ot' => 'Downtown'

const strFix = (str1: string, str2: string) => {
  str1 = (str1.charAt(0).toUpperCase() + str1.slice(1))
    .split('')
    .filter((char) => char !== '%')
    .join('');
  str2 = str2
    .split('')
    .reverse()
    .filter((char) => char !== '%')
    .join('');
  return str1 + str2;
};
console.log(strFix('java', 'tpi%rcs'));
console.log(strFix('c%ountry', 'edis'));
console.log(strFix('down', 'nw%ot'));
//===========================================================================
//If a is prime, return a. If not, return the next higher prime number
const primeNextPrime = (num: number) => {
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
const nextNumDivisible1 = (x: number, y: number) => {
  if (x % y === 0) {
    return x;
  } else if (x < 0) {
    return 0;
  } else {
    return nextNumDivisible1(x + 1, y);
  }
};
// console.log(nextNumDivisible1(1, 23));
// console.log(nextNumDivisible1(23, 23));
// console.log(nextNumDivisible1(7, 3));
// console.log(nextNumDivisible1(-5, 7));

const nextNumDivisible2 = (x: number, y: number) => {
  while (x % y !== 0) x++;
  return x;
};
console.log(nextNumDivisible2(1, 23));
console.log(nextNumDivisible2(23, 23));
console.log(nextNumDivisible2(7, 3));
console.log(nextNumDivisible2(-5, 7));
//============================================================================================
//Write a function that takes two strings (a and b) as arguments. Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'. Return the resulting string.
const inserChar = (a: string, b: string) => {
  let result = [];
  let rest = a;
  while (rest.length >= 1) {
    result.push(rest.slice(-3));
    rest = rest.slice(0, -3);
  }
  return result.reverse().join(b);
};
console.log(inserChar('1234567', '.'));
console.log(inserChar('abcde', '$'));
console.log(inserChar('zxyzxyzxyzxyzxyz', 'w'));
//========================================================================================
//Write a function that takes a string as argument. As it is, the string has no meaning. Increment each letter to the next letter in the alphabet. Return the correct word

const nextLetter = (inputStr: string) => {
  return inputStr
    .split('')
    .map((e) => String.fromCharCode(e.charCodeAt() + 1))
    .join('');
};
console.log(nextLetter('bnchmf')); //'coding'
console.log(nextLetter('bgddrd')); //'cheese';
console.log(nextLetter('sdrshmf')); //'testing'
//=================================================Arrays==========================================
//Write a function that takes an array (a) as argument. Extract the last 3 elements of 'a'. Return the resulting array
const removeLastThree = (a: number[]) => a.slice(-3);
console.log(removeLastThree([1, 2, 3, 4, 5]));
//=================================================Arrays==========================================
// A Function that takes an array (a) and a value (n) as argument. Return the nth element of 'a'
const nthElemArr = (a: number[], n: number) => a[n - 1];
console.log(nthElemArr([1, 2, 3, 4, 5], 3));
console.log(nthElemArr([10, 9, 8, 7, 6], 5));
console.log(nthElemArr([7, 2, 1, 6, 3], 1));
//=================================================Arrays==========================================
//Write a function that takes an array (a) as argument. Remove the first 3 elements of 'a'.
const removeFristThree = (a: number[]) => a.slice(3);
console.log(removeFristThree([1, 2, 3, 4]));
console.log(removeFristThree([5, 4, 3, 2, 1, 0]));
console.log(removeFristThree([99, 1, 1]));
//=================================================Arrays==========================================
//Extract the first 3 elements of a. Return the resulting array
const extractFirstThreeArr = (a: number[]) => a.slice(0, 3);
console.log(extractFirstThreeArr([1, 2, 3, 4]));
console.log(extractFirstThreeArr([5, 4, 3, 2, 1, 0]));
console.log(extractFirstThreeArr([99, 1, 1]));
//=================================================Arrays==========================================
//Write a function that takes an array a and number n. It should return the last n elements of a.
const nthLastGroupArr = (a: number[], n: number) => a.slice(-n);
console.log(nthLastGroupArr([1, 2, 3, 4, 5], 2));
console.log(nthLastGroupArr([1, 2, 3], 6));
console.log(nthLastGroupArr([1, 2, 3, 4, 5, 6, 7, 8], 3));
//=================================================Arrays==========================================
//The function should remove all elements equal to 'b' from the array. Return the filtered array.
const removeElemEqualToB = (a: any[], b: any) => a.filter((el) => el !== b);
console.log(removeElemEqualToB([1, 2, 3], 2));
console.log(removeElemEqualToB([1, 2, '2'], '2'));
console.log(removeElemEqualToB([false, '2', 1], false));
console.log(removeElemEqualToB([1, 2, '2', 1], 1));
//=================================================Arrays==========================================
//Return the number of negative values in the array
const howManyNegative = (a: number[]) => {
  return a.filter((el) => el < 0);
};
console.log(howManyNegative([1, -2, 2, -4]));
console.log(howManyNegative([0, 9, 1]));
console.log(howManyNegative([4, -3, 2, 1, 0]));
//=================================================Arrays==========================================
//Sort the array elements alphabetically
const sortArrAlphabetically = (arr: string[]) => arr.sort();
console.log(sortArrAlphabetically(['b', 'c', 'd', 'a']));
//=================================================Arrays==========================================
const descendingArr = (arr: number[]) => arr.sort((a, b) => b - a);
console.log(descendingArr([1, 3, 2]));
console.log(descendingArr([4, 2, 3, 1]));
//=================================================Arrays==========================================
//Sum of the numbers
const sumElArr = (arr: number[]) => arr.reduce((acc, num) => acc + num);
console.log(sumElArr([10, 100, 40]));
console.log(sumElArr([10, 100, 1000, 1]));
console.log(sumElArr([-50, 0, 50, 200]));
//=================================================Arrays==========================================
//Average of the numbers.
const averageElArr = (arr: number[]) =>
  arr.reduce((acc, num) => (acc += num)) / arr.length;
console.log(averageElArr([10, 100, 40]));
console.log(averageElArr([10, 100, 1000]));
console.log(averageElArr([-50, 0, 50, 200]));
//=================================================Arrays==========================================
//Return the longest string from an array of strings
const longestStringArr = (arr: string[]) =>
  arr.reduce((a, b) => (a.length <= b.length ? b : a));

console.log(longestStringArr(['help', 'me']));
console.log(longestStringArr(['I', 'need', 'candy']));
//=================================================Arrays==========================================
//Check if all array elements are equal
//v1
const equalElements1 = (arr: any[]) => {
  return new Set(arr).size === 1;
};

//v2
const equalElements2 = (arr: any[]) => arr.every((el) => el === arr[0]);

console.log(equalElements2([true, true, true, true]));
console.log(equalElements2(['test', 'test', 'test']));
console.log(equalElements2([1, 1, 1, 2]));
console.log(equalElements2(['10', 10, 10, 10]));
//=================================================Arrays==========================================
// Flatten array
//v1
const flattenArrs1 = (...arrays: any[]) =>
  arrays.reduce((acc, cur) => {
    acc.concat(cur), [];
  });
//v2
const flattenArrs2 = (...arrays) => arrays.flat();

console.log(flattenArrs2([1, 2, 3], [4, 5, 6]));
console.log(flattenArrs2(['a', 'b', 'c'], [4, 5, 6]));
console.log(flattenArrs2([true, true], [1, 2], ['a', 'b']));
//===============================================Arrays==========================================
//Sort array by object property - b

//v1
const sortArrByObjectPropertyB = (inputArr: any[]) =>
  inputArr.sort((obj1, obj2) => obj1.b - obj2.b);

console.log(
  sortArrByObjectPropertyB([
    { a: 1, b: 2 },
    { a: 5, b: 4 },
  ])
);
console.log(
  sortArrByObjectPropertyB([
    { a: 2, b: 10 },
    { a: 5, b: 4 },
  ])
);
console.log(
  sortArrByObjectPropertyB([
    { a: 1, b: 7 },
    { a: 2, b: 1 },
  ])
);
//v2
const sortArrByObjectPropertyB2 = (arr: any[]) =>
  arr.sort((obj1, obj2) => (obj1.b > obj2.b ? obj1 : obj2));
console.log(
  sortArrByObjectPropertyB([
    { a: 1, b: 2 },
    { a: 5, b: 4 },
  ])
);
console.log(
  sortArrByObjectPropertyB([
    { a: 2, b: 10 },
    { a: 5, b: 4 },
  ])
);
console.log(
  sortArrByObjectPropertyB([
    { a: 1, b: 7 },
    { a: 2, b: 1 },
  ])
);
//===============================================Arrays==========================================
//Merge two arrays with duplicate values
const mergeArraysUniqueValuesOnly = (arr1, arr2: number[]) =>
  [...new Set(arr1.concat(arr2))].sort((a, b) => a - b);
console.log(mergeArraysUniqueValuesOnly([1, 2, 3], [3, 4, 5]));
console.log(
  mergeArraysUniqueValuesOnly([-10, 22, 333, 42], [-11, 5, 22, 41, 42])
);
//===============================================Arrays==========================================
//Sum up all array elements with values greater than b
const sumArrElementsGreaterThanb = (arr: number[], b: number) => {
  return arr.reduce((acc, cur) => {
    cur > b ? (acc += cur) : null;
    return acc;
  }, 0);
};
console.log(sumArrElementsGreaterThanb([1, 2, 3, 4, 5, 6, 7], 2));
console.log(sumArrElementsGreaterThanb([-10, -11, -3, 1, -4], -3));
console.log(sumArrElementsGreaterThanb([78, 99, 100, 101, 401], 99));
//===============================================Arrays==========================================
//Create a range of numbers [] * between min and max
const rangeOfNumbersArr = (a: number, b: number) => {
  let range = [];
  while (a <= b) {
    range.push(a++);
  }
  return range;
};
console.log(rangeOfNumbersArr(2, 10));
console.log(rangeOfNumbersArr(1, 3));
console.log(rangeOfNumbersArr(-5, 5));
console.log(rangeOfNumbersArr(2, 7));
//===============================================Arrays==========================================
//Group array of strings by first letter * Write a function that takes an array of strings as argument. Group those strings by their first letter. Return an object that contains properties with keys representing first letters. The values should be arrays of strings containing only the corresponding strings. For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to. { a: ['Alf', 'Alice'], b: ['Ben']}

const ojbFromStringSortArr = (arr: string[]) => {
  return arr.reduce((acc, cur) => {
    const firstLetter = cur.toLowerCase().charAt(0);
    return { ...acc, [firstLetter]: [...(acc[firstLetter] || []), cur] };
  }, {});
};
console.log(ojbFromStringSortArr(['Alf', 'Alice', 'Ben'])); // { a: ['Alf', 'Alice'], b: ['Ben']}
console.log(ojbFromStringSortArr(['Ant', 'Bear', 'Bird'])); //{ a: ['Ant'], b: ['Bear', 'Bird']}
console.log(ojbFromStringSortArr(['Berlin', 'Paris', 'Prague'])); //{ b: ['Berlin'], p: ['Paris', 'Prague']}
//=================================================================================================
// Define an array with conditional elements
// Write a function that takes an array with arbitrary elements and a number as arguments. Return a new array, the first element should be either the given number itself. or zero if the number is smaller than 6. The other elements should be the elements of the original array. Try not to mutate the original array
const arrConditional = (arrO: any[], num: number) => {
  const resultArr = num < 6 ? [0, ...arrO] : [num, ...arrO];
  return resultArr;
};
console.log(arrConditional([1, 2, 3], 6));
console.log(arrConditional(['a', 'b'], 2));
console.log(arrConditional([null, false], 11));
