"use strict";
// Weak Maps - don't really know a practical use for them
// the keys can only be objects -- objects references are weak,meaning that they don't interfere with the garbage collection
let myMap = new WeakMap();
let ob1 = {};
myMap.set(ob1, 'WeakMap Play');
console.log('myMap: ', myMap, 'ob1 form myMap:', myMap.get(ob1));
ob1 = null;
console.log(myMap);
//# sourceMappingURL=test.js.map