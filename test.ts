// Class

// let p1 = new Person();

class Person {}
let p = new Person();

//classes are functions but ....Functions are hoisted, classes are not!!!

function employee() {}
employee();

console.log(typeof Person);

class Animal {
  greet() {}
}

let a = new Animal();

console.log(Animal.prototype);
console.log(a.greet === Animal.prototype.greet);

//adding a method to a class is like adding a method to the prototype. => Classes are jus syntactic sugar over prototype inheritance
