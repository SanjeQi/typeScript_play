// Write a function that takes a number (num) as argument
// If a is prime, return num
// If not, return the next higher prime number

function myFunction(a) {
  for (let i = 2; i < a; i++) {
    if (a % i === 0) {
      return myFunction(a + 1);
    }
  }
}
//   return a;
// }

myFunction(38);
myFunction(7);
myFunction(115);
myFunction(2000);

console.log(myFunction(38)); //Expected 41
console.log(myFunction(7)); //Expected 7
console.log(myFunction(115)); //Expected 127
console.log(myFunction(2000)); //Expected 2003

//---------------------------------------------------------------

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

------------------------------------------------------------
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

// console.log(insertString('abcde', '$')); //'ab$cde'
// console.log(insertString('1234567', '.')); //'1.234.567'
// console.log(insertString('zxyzxyzxyzxyzxyz', 'w')); //'zwxyzwxyzwxyzwxyzwxyz'

// // ----------------------------------------------------------------------------

// let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(arr1);
// console.log(arr1.splice(2, 3, 'insert1', 'insert2'));
// console.log(arr1);

//---------------------------------------------------------------------------------
// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

const nextLetter = (inputStr: string) => {
  let alphabet = Array(26)
    .fill(0)
    .map((val, i) => String.fromCharCode(i + 97))
    .reduce((acc, val) => {
      for(let i = 0; i <= inputStr.length)
      return acc;
    }, []);
  return alphabet;
};

console.log(nextLetter('bnchmf')); //'coding'
console.log(nextLetter('bgddrd')); //'cheese';
console.log(nextLetter('sdrshmf')); //




