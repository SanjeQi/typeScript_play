"use strict";
//Symbol iterator
// "for of" loop -- needs the objet to have an iterator method
// for loop ---> iterator method ---> Symbol.iterator
let str = 'Hello';
let arr = [1, 2, 3];
let num = 5;
let obj = { name: 'Chandler' };
console.log('for string:', typeof str[Symbol.iterator]);
console.log('for arrays:', typeof arr[Symbol.iterator]);
console.log('for numbers:', typeof num[Symbol.iterator]);
console.log('for objects:', typeof obj[Symbol.iterator]);
//# sourceMappingURL=test.js.map