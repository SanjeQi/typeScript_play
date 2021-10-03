//Prototype More

//!Prototype object is present on every function function.prototype
//!! On each function prototype object, there is a property called constructor which points back to the function itself

function Person(name) {
  this.name = name;
}
const arrow = () => {
  return `From the arrow`;
};

Person.prototype.sayMyname = function () {
  console.log(`My name is ${this.name}`);
};
Person.prototype.eat = function (food) {
  console.log(`I'm eating ${food}`);
};
Person.prototype.sleep = function () {
  console.log(`Sleeping ...`);
};

const batman = new Person('Bruce Wayne');
const superman = new Person('Clark Kent');

console.log('batman: ', batman, 'superman: ', superman);
console.log(Person.prototype);
console.log(arrow.prototype); //undefined arrows functions don't have a prototype object

// ----------------- Object.getPrototypeOf() ---------------

// Once an object has been created it is possible to get hold of the prototype of that object using Object.getPrototypeOf()

console.log(
  'Prototype of batman',
  Object.getPrototypeOf(batman),
  '/ constructor of batman:',
  batman.constructor
);

// ----------------- Instanceof Operator ---------------
// it is possible to know if an object is an instance of a constructor function by using instanceof operator

console.log(batman instanceof Person); // true
