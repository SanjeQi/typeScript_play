//Prototype

//! Every function(except arrow functions) in JS has a property called prototype which is an object
//!! By defining methods on the prototype Object, we get to share methods across all instances created by that function
//!!! This is what happens when we use the 'new' keyword to create such instances
//!!!! Arrow functions don't have a prototype

// ---------------- Person tied methods -----------

function Person(name) {
  let person = {};
  person.name = name;
  person.sayMyName = function () {
    console.log(`This is my name ${this.name} 1`);
  };
  person.eat = function (food) {
    console.log(`I'm eating ${food} 1`);
  };
  person.sleep = function () {
    console.log(`${this.name} is sleeping...1`);
  };
  return person;
}

const bob1 = Person('Bob');
const ana1 = Person('Ana');
const jack1 = Person('Jack');

bob1.sayMyName();
jack1.sleep();
ana1.eat('pizza');

// ---------------- Reusable Methods -----------
const personMethods2 = {
  sayMyName2() {
    console.log(`My name is ${this.name} 2`);
  },
  eat2(food) {
    console.log(`I'm eating ${food} 2 `);
  },
  sleep2() {
    console.log(`Sleeping...2`);
  },
};

function Person2(name) {
  let person2 = {};
  person2.name = name;
  person2.sayMyName2 = personMethods2.sayMyName2;
  person2.eat2 = personMethods2.eat2;
  person2.sleep2 = personMethods2.sleep2;
  return person2;
}
const bob = Person2('bob');
const ana = Person2('ana');
const jack = Person2('jack');
bob.eat2('fish');
ana.sleep2();
jack.sayMyName2();

// ---------------- Object.create() -----------

const personMethods3 = {
  sayMyname3() {
    console.log(`My name is ${this.name} 3`);
  },
  eat3(food) {
    console.log(`I'am eating ${food} 3`);
  },
  sleep3() {
    console.log(`Sleeping 3`);
  },
};

function Person3(name) {
  let person = Object.create(personMethods3);
  person.name = name;
  return person;
}

const kramer = Person3('Kramer');
kramer.sayMyname3();
kramer.eat3('pizza');
kramer.sleep3();

// ---------------- Prototype  -----------
// Every function has a property called Prototype that references an Object
//!! In JS, every function has an object called prototype which allows us to share methods across all instances of that function/object

Person4.prototype.sayMyName4 = function () {
  console.log(`My name is ${this.name} 4`);
};
Person4.prototype.eat4 = function (food) {
  console.log(`I'm eating ${food} 4`);
};
Person4.prototype.sleep4 = function () {
  console.log('Sleeping...4');
};
function Person4(name) {
  let person4 = Object.create(Person4.prototype);
  person4.name = name;
  return person4;
}

Person4('Cristi');
// ---------------- 'new' keyword and Prototype  -final -----------
// When we invoke a function using the 'new' keyword :
//1. A new 'this' object is created pointing to the prototype object of that function
//2. 'this' object is automatically returned

// Person5 is a constructor

function Person5(name) {
  this.name = name;
}

Person5.prototype.sayMyname5 = function () {
  console.log(`My name is ${this.name}`);
};
Person5.prototype.eat5 = function (food) {
  console.log(`I'm eating ${food}`);
};
Person5.prototype.sleep5 = function () {
  console.log(`Sleeping ...5`);
};
const batman = new Person5('Bruce Wayne');
const superman = new Person5('Clark Kent');

console.log('batman: ', batman, 'superman: ', superman);
