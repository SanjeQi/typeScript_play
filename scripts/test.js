"use strict";
//forEach with Maps and Sets
//forEach with arrays
const numbers = [2, 4, 6, 8];
numbers.forEach(arrayFunction);
//arrayFunction definition
function arrayFunction(element, index, array) {
    console.log('arr[' + index + ']=' + element);
}
//forEach with Maps
let myMap = new Map([
    ['fname', 'Chandler'],
    ['lname', 'Bing'],
]);
myMap.forEach(mapFunction);
//mapFunction definition
function mapFunction(value, key, callingMap) {
    console.log('key:', key, 'value:', value);
    console.log(myMap === callingMap);
}
//forEach with Sets
let mySet = new Set([1, 2, 3]);
mySet.forEach(setFunction);
//setFunction definition
function setFunction(value, key, callingSet) {
    console.log('key:', key, 'value:', value);
    console.log(mySet === callingSet);
}
//# sourceMappingURL=test.js.map