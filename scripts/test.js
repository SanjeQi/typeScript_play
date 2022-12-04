"use strict";
//===============================================Objects==========================================
// Accessing object properties one
// Write a function that takes an object with two properties as argument. It should return the value of the property with key country.
const getCountry = (obj) => {
    return obj['country'];
};
console.log(getCountry({ continent: 'Asia', country: 'Japan' }));
console.log(getCountry({ country: 'Sweden', continent: 'Europe' }));
//===============================================Objects==========================================
// Accessing object properties two
// Write a function that takes an object with two properties as argument. It should return the value of the property with key 'prop-2'
const objectProp1 = (obj) => obj['prop-2'];
console.log(objectProp1({ one: 1, 'prop-2': 2 }));
console.log(objectProp1({ 'prop-2': 'two', prop: 'test' }));
//===============================================Objects==========================================
// Creating Javascript objects one
// Write a function that takes a string as argument. Create an object that has a property with key 'key' and a value equal to the string
const createObj = (a) => {
    return { key: a };
};
console.log(createObj('a'));
console.log(createObj('z'));
console.log(createObj('b'));
//===============================================Objects==========================================
// Accessing object properties three
// Write a function that takes an object with two properties and a string as arguments. It should return the value of the property with key equal to the value of the string
const objectProp2 = (obj, key) => {
    return obj[key];
};
console.log(objectProp2({ continent: 'Asia', country: 'Japan' }, 'continent'));
console.log(objectProp2({ country: 'Sweden', continent: 'Europe' }, 'country'));
//===============================================Objects==========================================
// Extract keys from Javascript object
// Write a function that takes an object (a) as argument. Return an array with all object keys.
const getKeysFromObj = (obj) => {
    return Object.keys(obj);
};
console.log(getKeysFromObj({ a: 1, b: 2, c: 3 }));
console.log(getKeysFromObj({ j: 9, i: 2, x: 3, z: 4 }));
console.log(getKeysFromObj({ w: 15, x: 22, y: 13 }));
//===============================================Objects==========================================
// Check if property exists in object
// Write a function that takes an object (a) and a string (b) as argument. Return true if the object has a property with key 'b'. Return false otherwise
//v1
const propertyExistsOnObject1 = (obj, s) => {
    return Object.keys(obj).includes(s);
};
//v2
const propertyExistsOnObject2 = (obj, s) => {
    return s in obj;
};
console.log(propertyExistsOnObject2({ a: 1, b: 2, c: 3 }, 'b'));
console.log(propertyExistsOnObject2({ x: 'a', y: 'b', z: 'c' }, 'a'));
console.log(propertyExistsOnObject2({ x: 'a', y: 'b', z: undefined }, 'z'));
//===============================================Objects==========================================
// Check if property exists in object and is truthy
//Write a function that takes an object (a) and a string (b) as argument. Return true if the object has a property with key 'b', but only if it has a truthy value. In other words, it should not be null or undefined or false. Return false otherwise.
const propExistsAndIsTrue = (obj, s) => {
    return Boolean(obj[s]);
};
console.log(propExistsAndIsTrue({ a: 1, b: 2, c: 3 }, 'b'));
console.log(propExistsAndIsTrue({ x: 'a', y: null, z: 'c' }, 'y'));
console.log(propExistsAndIsTrue({ x: 'a', b: 'b', z: undefined }, 'z'));
//===============================================Objects==========================================
// Creating Javascript objects two
// Write a function that takes two strings (a and b) as arguments. Create an object that has a property with key 'a' and a value of 'b'. Return the object.
const createObj2 = (key, value) => {
    return { [key]: value };
};
console.log(createObj2('a', 'b'));
console.log(createObj2('z', 'x'));
console.log(createObj2('b', 'w'));
//===============================================Objects==========================================
// Write a function that takes two arrays (a and b) as arguments. Create an object that has properties with keys 'a' and corresponding values 'b'. Return the object
const createObjFromTwoArr = (a, b) => {
    return a.reduce((acc, cur, i) => ({ ...acc, [cur]: b[i] }), {});
};
console.log(createObjFromTwoArr(['a', 'b', 'c'], [1, 2, 3]));
console.log(createObjFromTwoArr(['w', 'x', 'y', 'z'], [10, 9, 5, 2]));
console.log(createObjFromTwoArr([1, 'b'], ['a', 2]));
console.log('asfasfa');
//===============================================Objects==========================================
// Remove a property from an object
// Write a function that takes an object as argument. It should return an object with all original object properties. except for the property with key 'b
const removePropFromObj = (obj) => {
    const { b, ...rest } = obj;
    return rest;
};
console.log(removePropFromObj({ a: 1, b: 7, c: 3 }));
// console.log(removePropFromObj({ b: 0, a: 7, d: 8 }));
// console.log(removePropFromObj({ e: 6, f: 4, b: 5, a: 3 }));
//===============================================Objects==========================================
const myFunction = (a, b) => {
    return a.reduce((acc, cur, i) => {
        return { ...acc, [cur]: b[i] };
    }, {});
};
console.log(myFunction(['a', 'b', 'c'], [1, 2, 3])); //{a:1,b:2,c:3}
console.log(myFunction(['w', 'x', 'y', 'z'], [10, 9, 5, 2])); // {w:10,x:9,y:5,z:2}
//# sourceMappingURL=test.js.map