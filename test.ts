//Symbol iterator

// "for of" loop -- needs the objet to have an iterator method
// for loop ---> iterator method ---> Symbol.iterator

let str = 'Hello';
let arr = [1, 2, 3];
let num = 5;
let obj = { name: 'Chandler' };

//Q: What am i doing here?
//A: Checking to see if a method exist for the object at this particular key(ex: str[Symbol.iterator]), and if typeof key exists meaning is returning a function this mean that the object itself can be use with for of
console.log('for string:', typeof str[Symbol.iterator]); //function - for of loop
console.log('for arrays:', typeof arr[Symbol.iterator]); //function - for of loop
console.log('for numbers:', typeof num[Symbol.iterator]); //undefined - no for of loop
console.log('for objects:', typeof obj[Symbol.iterator]); //undefined - no for of loop
