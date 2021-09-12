"use strict";
// Map is:
//an ordered list of key value pairs. In map the key and the value can be of any type
let myMap = new Map();
myMap.set('fname', 'Chandler'); // key:fname  value: Chandler
myMap.set('age', 30);
// Retrieving a value from a map : myMap.get()
console.log(myMap.get('age'));
let ob1 = {};
let ob2 = {};
myMap.set(ob1, 10);
myMap.set(ob2, 20);
console.log(myMap.get(ob1));
//Size of the map same at sets:  myMap.size
console.log(myMap.size);
//Check existence of a key: myMap.has(key)
console.log(myMap.has('age'));
//Remove a key value pair from a map: myMap.delete(key)
myMap.delete(ob1);
//Empty the map - remove all key/value pairs: myMap.clear()
myMap.clear();
console.log(myMap);
//# sourceMappingURL=test.js.map