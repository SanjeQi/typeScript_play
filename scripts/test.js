"use strict";
// Class
// let p1 = new Person();
class Person {
}
let p = new Person();
//classes are functions but ....Functions are hoisted, classes are not!!!
function employee() { }
employee();
console.log(typeof Person);
class Animal {
    greet() { }
}
let a = new Animal();
console.log(Animal.prototype);
console.log(a.greet === Animal.prototype.greet);
//# sourceMappingURL=test.js.map