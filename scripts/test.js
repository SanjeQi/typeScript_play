"use strict";
//Sets - Weak Sets
//Similar to stong Sets but can store only store object references and not primitive values
// let mySet = new Set();
// let key = {};
// mySet.add(key);
// console.log('mySet', mySet);
// console.log(mySet.size);
// key = null;
// console.log(mySet.size);
// key = [...mySet][0];
// console.log(key);
//Create a week Set
let set = new WeakSet();
let key = {};
set.add(key);
console.log(set.has(key));
//# sourceMappingURL=test.js.map