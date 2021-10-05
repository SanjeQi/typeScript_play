"use strict";
//Class keyword
/*
function Person1(name) {
  this.name = name;
}

Person1.prototype.sayMyName = function () {
  console.log(`My name is ${this.name}`);
};
Person1.prototype.eat = function (food) {
  console.log(`I'm eating ${food}`);
};
Person1.prototype.sleep = function () {
  console.log('Sleeping...');
};

const batman1 = new Person1('Bruce Wayne');
const superman1 = new Person1('Clark Kent');

console.log('Batman Object: ', batman1, 'Superman Object: ', superman1); */
// Using class - Person class
class Person {
    constructor(name) {
        this.name = name;
    }
    sayMyName() {
        console.log(`My name is ${this.name}`);
    }
    eat(food) {
        console.log(`I'm eating ${food}`);
    }
    sleep() {
        console.log('Sleeping');
    }
}
const batman = new Person('Bruce Wayne');
const superman = new Person('Clark Kent');
console.log('Batman Object: ', batman, 'Superman Object: ', superman);
/**
 * Programer constructor Function
 */
function Programer(name, language) {
    Person.call(this, name);
    this.language = language;
}
Programer.prototype = Object.create(Person.prototype);
Programer.prototype.code = function () {
    console.log(`I'm coding in ${this.language}`);
};
Programer.prototype.constructor = Programer;
console.log(Programer.prototype.constructor);
//# sourceMappingURL=test.js.map