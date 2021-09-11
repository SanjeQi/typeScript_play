//Sets - Weak Sets
//Similar to strong Sets but, they can only store object references and not primitive values

//The only advantage of a weak set over a strong set is the fact that memory is handel properly with weak sets

let mySet = new Set();
let key = {};
mySet.add(key);
console.log('mySet', mySet);
console.log(mySet.size);
key = null;
console.log(mySet.size);
key = [...mySet][0];
console.log(key);

//Create a week Set

let set = new WeakSet();
let key = {};
set.add(key);
console.log(set.has(key));
key = null;

//
