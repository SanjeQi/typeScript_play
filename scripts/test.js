"use strict";
// Map
/*
-----The map object in JS holds key-value pairs(similar to an regular object)----
* Creating a map: */
const mapEx = new Map();
/* Adding key,value pairs to a map using set methods by passing key and value as arguments:  */
mapEx.set('firstName', 'Bruce');
mapEx.set('lastName', 'Wayne');
/* To check the number of key value pairs in the map, use 'size' property: */
mapEx.size; // -> Returns 2
/* To get the value at a particular key, use 'get' method by passing in key as argument: */
mapEx.get('firstName'); // -> Returns 'Bruce'
mapEx.get('lastName'); //  -> Returns 'Wayne'
/* To check is a key exists in a map, use 'has' method  */
mapEx.has('firstName'); // -> Returns true
mapEx.has('fullName'); // -> Returns false
/* To remove a key value pair from a map, use the delete method passing in the key. */
mapEx.delete('firstName'); // -> Returns true
mapEx.delete('fullName'); //  -> Returns false
/* To delete all the key value pairs in a map use 'clear' method: */
mapEx.clear();
mapEx.size; // -> Returns 0
mapEx.set('firstName', 'Bruce');
mapEx.set('lastName', 'Wayne');
/* To iterate over key-value pair:    */
for (let [key, value] of mapEx) {
    console.log(`${key} = ${value}`);
}
/* To iterate over keys only:    */
for (let key of mapEx.keys()) {
    console.log(key);
}
/* To iterate over values only:    */
for (let value of mapEx.values()) {
    console.log(value);
}
/* ----------------------- Map and Array conversion -------------  */
/* 2D Array to MAP */
const personArr = [
    ['firstName', 'Clarke'],
    ['lastName', 'Kent'],
];
const personMap = new Map(personArr);
console.log('personArr', personArr, 'personMap', personMap);
/* Map to Array */
const map = new Map();
map.set('firstName', 'Cosmo');
map.set('lastName', 'Kramer');
const arr = Array.from(map);
console.log('the array from map:', map);
/* ----------------------- Map vs Object -------------  */
/* ---1.keys type --- */
/*
A map keys can be any value (including functions,objects, or any primitive)
The keys of an Object however must be either a string,number or a symbol
*/
const keyString = 'a string';
const keyObj = {};
const keyFunc = function () { };
/* ---2.Accidental keys --- */
map.set(keyString, 'String key value');
map.set(keyObj, 'Object key value');
map.set(keyFunc, 'Function key value');
console.log(map);
//# sourceMappingURL=test.js.map