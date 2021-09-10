"use strict";
//Sets - Object - can only contain unique values
let mySet = new Set();
let ob1 = {};
let ob2 = {};
mySet.add('Hello');
mySet.add(1);
mySet.add(1); // not added to the set - not unique
//Passing an object to the set
mySet.add(ob1);
mySet.add(ob2); //both objects are not converted to stings so that is why they are unique and are added to the set
console.log(mySet, mySet.size);
//Passing an Array to the set
let newSet = new Set([1, 2, 3, 4, 4, 4]);
console.log(newSet); // output: Set(4) {1, 2, 3, 4} -- only the unique values added
//Chaining
let chainSet = new Set().add('Hello').add('world');
console.log(chainSet);
//To check the existence of a value in a Set use .has() :ex: randomSetObject.has()
console.log(newSet.has(5));
//To delete a value from a set
console.log(newSet.delete(4));
console.log(newSet);
console.log(newSet.delete(3));
console.log(newSet);
//# sourceMappingURL=test.js.map