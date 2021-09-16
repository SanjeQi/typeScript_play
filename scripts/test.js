"use strict";
//TypeScript
//Declarations and Annotations
let x = 10;
let y = 'hi';
let z = true;
// this is done by default:
let a = 100;
//a = true; //<-- errors out boolean is not assignable to type number
let b = a + 2; // ok
b = a + 'hi';
console.log(b);
//# sourceMappingURL=test.js.map