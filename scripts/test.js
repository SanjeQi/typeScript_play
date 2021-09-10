"use strict";
// Sets & Maps
//Sets
let mySet = Object.create(null);
let mySet1 = Object.create({ name: 'Lee' });
mySet.id = 0;
if (mySet.id) {
    console.log('id exists ');
}
//Maps
let myMap = Object.create(null);
myMap.name = 'Chandler';
let val = myMap.name;
console.log(val, myMap);
// Number 100 and the string 100 refers to the same property --- is a problem if I want to use the number and a string as keys. The number is automatically coerced into string
myMap[100] = 'Hello';
console.log('100');
//Objects
let ob1 = {};
let ob2 = {};
myMap[ob1] = 'World';
console.log(myMap[ob1]); //output: World;
console.log(myMap[ob2]); //output: World;  ????
console.log(ob1.toString()); // output: [object Object]
console.log(ob2.toString()); // output: [object Object]
//# sourceMappingURL=test.js.map