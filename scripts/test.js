"use strict";
// // Arrow function
// --------------------- Classical function definitions ----Problem ---
const person1 = {
    firstName: 'Cosmo',
    lastName: 'Kramer',
    sayMyName1() {
        const fullName = function () {
            return `${this.firstName} ${this.lastName}`;
        };
        console.log(`My full name is ${fullName()}`);
    },
};
person1.sayMyName1(); // firstName and lastName undefined
// // Problem is that implicit binding is on the sayMyName function
// // Within sayMyName, 'this' points to the person object
// // on line 10 fullName has no implicit , explicit , 'new' binding
// // it defaults to global binding
// // within the fullName() function, 'this' points to the window object
// // in the global scope, we don't have any variable called firstName and lastName --- that is why it errors out
// ---------------------Lexical binding - with arrow functions
// solution: transforming the fullName function into an arrow function
const person2 = {
    firstName: 'Cosmo',
    lastName: 'Kramer',
    sayMyName2() {
        const fullName = () => `${this.firstName} ${this.lastName}`;
        console.log(`My full name is ${fullName()}`);
    },
};
person2.sayMyName2(); // My full name is Cosmo Kramer
//! Unlike normal functions, an arrow function does not define a 'this' keyword at all
//!'this' keyword in an arrow function behaves like any other variable
//! it is going to lexically resolve to an enclosing scope that does define 'this' keyword
//# sourceMappingURL=test.js.map