// //===============================================Objects==========================================
// // Accessing object properties one
// // Write a function that takes an object with two properties as argument. It should return the value of the property with key country.
// const getCountry = (obj: object) => {
//   return obj['country'];
// };
// console.log(getCountry({ continent: 'Asia', country: 'Japan' }));
// console.log(getCountry({ country: 'Sweden', continent: 'Europe' }));
// //===============================================Objects==========================================
// // Accessing object properties two
// // Write a function that takes an object with two properties as argument. It should return the value of the property with key 'prop-2'
// const objectProp1 = (obj: object) => obj['prop-2'];
// console.log(objectProp1({ one: 1, 'prop-2': 2 }));
// console.log(objectProp1({ 'prop-2': 'two', prop: 'test' }));
// //===============================================Objects==========================================
// // Creating Javascript objects one
// // Write a function that takes a string as argument. Create an object that has a property with key 'key' and a value equal to the string
// const createObj = (a: string) => {
//   return { key: a };
// };
// console.log(createObj('a'));
// console.log(createObj('z'));
// console.log(createObj('b'));
// //===============================================Objects==========================================
// // Accessing object properties three
// // Write a function that takes an object with two properties and a string as arguments. It should return the value of the property with key equal to the value of the string
// const objectProp2 = (obj: object, key: string) => {
//   return obj[key];
// };
// console.log(objectProp2({ continent: 'Asia', country: 'Japan' }, 'continent'));
// console.log(objectProp2({ country: 'Sweden', continent: 'Europe' }, 'country'));
// //===============================================Objects==========================================
// // Extract keys from Javascript object
// // Write a function that takes an object (a) as argument. Return an array with all object keys.
// const getKeysFromObj = (obj: object) => {
//   return Object.keys(obj);
// };
// console.log(getKeysFromObj({ a: 1, b: 2, c: 3 }));
// console.log(getKeysFromObj({ j: 9, i: 2, x: 3, z: 4 }));
// console.log(getKeysFromObj({ w: 15, x: 22, y: 13 }));
// //===============================================Objects==========================================
// // Check if property exists in object
// // Write a function that takes an object (a) and a string (b) as argument. Return true if the object has a property with key 'b'. Return false otherwise
// //v1
// const propertyExistsOnObject1 = (obj: object, s: string) => {
//   return Object.keys(obj).includes(s);
// };
// //v2
// const propertyExistsOnObject2 = (obj: object, s: string) => {
//   return s in obj;
// };
// console.log(propertyExistsOnObject2({ a: 1, b: 2, c: 3 }, 'b'));
// console.log(propertyExistsOnObject2({ x: 'a', y: 'b', z: 'c' }, 'a'));
// console.log(propertyExistsOnObject2({ x: 'a', y: 'b', z: undefined }, 'z'));
// //===============================================Objects==========================================
// // Check if property exists in object and is truthy
// //Write a function that takes an object (a) and a string (b) as argument. Return true if the object has a property with key 'b', but only if it has a truthy value. In other words, it should not be null or undefined or false. Return false otherwise.
// const propExistsAndIsTrue = (obj: object, s: string) => {
//   return Boolean(obj[s]);
// };
// console.log(propExistsAndIsTrue({ a: 1, b: 2, c: 3 }, 'b'));
// console.log(propExistsAndIsTrue({ x: 'a', y: null, z: 'c' }, 'y'));
// console.log(propExistsAndIsTrue({ x: 'a', b: 'b', z: undefined }, 'z'));
// //===============================================Objects==========================================
// // Creating Javascript objects two
// // Write a function that takes two strings (a and b) as arguments. Create an object that has a property with key 'a' and a value of 'b'. Return the object.
// const createObj2 = (key: string, value: string) => {
//   return { [key]: value };
// };
// console.log(createObj2('a', 'b'));
// console.log(createObj2('z', 'x'));
// console.log(createObj2('b', 'w'));
// //===============================================Objects==========================================
// // Write a function that takes two arrays (a and b) as arguments. Create an object that has properties with keys 'a' and corresponding values 'b'. Return the object
// const createObjFromTwoArr = (a: any[], b: any[]) => {
//   return a.reduce((acc, cur, i) => ({ ...acc, [cur]: b[i] }), {});
// };
// console.log(createObjFromTwoArr(['a', 'b', 'c'], [1, 2, 3]));
// console.log(createObjFromTwoArr(['w', 'x', 'y', 'z'], [10, 9, 5, 2]));
// console.log(createObjFromTwoArr([1, 'b'], ['a', 2]));
// console.log('asfasfa');
// //===============================================Objects==========================================
// // Remove a property from an object
// // Write a function that takes an object as argument. It should return an object with all original object properties. except for the property with key 'b
// const removePropFromObj = (obj) => {
//   const { b, ...rest } = obj;
//   return [rest, obj];
// };
// console.log(removePropFromObj({ a: 1, b: 7, c: 3 }));
// // console.log(removePropFromObj({ b: 0, a: 7, d: 8 }));
// // console.log(removePropFromObj({ e: 6, f: 4, b: 5, a: 3 }));
// //===============================================Objects==========================================
// // Return nested object property
// // Write a function that takes an object as argument. In some cases the object contains other objects with some deeply nested properties. Return the property 'b' of object 'a' inside the original object if it exists. If not, return undefined
// interface Obj1 {
//   [key: string]: number | {};
// }
// const returnNesteProp = (obj: Obj1) => {
//   return obj?.a?.b;
// };
// console.log(returnNesteProp({ a: 1 }));
// console.log(returnNesteProp({ a: { b: { c: 3 } } }));
// console.log(returnNesteProp({ b: { a: 1 } }));
// console.log(returnNesteProp({ a: { b: 2 } }));
// //===============================================Objects==========================================
// // Sum object values
// // Write a function that takes an object (a) as argument. Return the sum of all object a?: number;
// interface Obj {
//   [key: string]: number;
// }
// const sumObjValues = (obj: Obj) => {
//   return Object.values(obj).reduce((a, b) => a + b, 0);
// };
// console.log(sumObjValues({ a: 1, b: 2, c: 3 }));
// console.log(sumObjValues({ j: 9, i: 2, x: 3, z: 4 }));
// console.log(sumObjValues({ w: 15, x: 22, y: 13 }));
// //===============================================Objects==========================================
// // Merge two objects with matching keys
// // Write a function that takes two objects as arguments. Unfortunately, the property 'b' in the second object has the wrong key. It should be named 'd' instead. Merge both objects and correct the wrong property name. Return the resulting object. It should have the properties 'a', 'b', 'c', 'd', and 'e'
// const mergeObjWithMachStrings = (obj1: Obj, obj2: Obj) => {
//   const { b, ...rest } = obj2;
//   return { ...obj1, ...rest, d: b };
// };
// console.log(mergeObjWithMachStrings({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 })); //{ a: 1, b: 2, c: 3, e: 5, d: 4}
// console.log(mergeObjWithMachStrings({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 })); //{ a: 5, b: 4, c: 3, e: 2, d: 1}
// //===============================================Objects==========================================
// // Multiply all object values by x
// // Write a function that takes an object (a) and a number (b) as arguments. Multiply all values of 'a' by 'b'. Return the resulting object.
// interface obj {
//   [key: string]: number;
// }
// const multiplyObjValuesWithNum = (obj: obj, num: number) => {
//   return Object.entries(obj).reduce((acc, [key, val]) => {
//     return { ...acc, [key]: val * num };
//   }, {});
// };
// console.log(multiplyObjValuesWithNum({ a: 1, b: 2, c: 3 }, 3));
// console.log(multiplyObjValuesWithNum({ j: 9, i: 2, x: 3, z: 4 }, 10));
// console.log(multiplyObjValuesWithNum({ w: 15, x: 22, y: 13 }, 6));
// //===============================================Objects==========================================
// // Convert array to object with counter
// // Write a function that takes an array of numbers as argument. Convert the array to an object. It should have a key for each unique value of the array. The corresponding object value should be the number of times the key occurs within the array.
// const converArrToObjUniqe = (a: number[]) => {
//   return a.reduce((acc, num) => {
//     return { ...acc, [num]: (acc[num] || 0) + 1 };
//   }, {});
// };
// console.log(converArrToObjUniqe([1, 2, 2, 3])); //{1:1,2:2,3:1}
// console.log(converArrToObjUniqe([9, 9, 9, 99])); //{9:3,99:1}
// console.log(converArrToObjUniqe([4, 3, 2, 1])); //{1:1,2:1,3:1,4:1}
// //===============================================Objects==========================================
// // Swap object keys with values
// // Write a function that takes an object as argument. Somehow, the properties and keys of the object got mixed up. Swap the Javascript object's key with its values and return the resultifng object
// interface ObjString {
//   [key: number | string]: string | number;
// }
// const swapObjKeysWithValues = (obj: ObjString) => {
//   return Object.entries(obj).reduce((acc, [key, val]) => {
//     return { ...acc, [val]: key };
//   }, {});
// };
// console.log(swapObjKeysWithValues({ z: 'a', y: 'b', x: 'c', w: 'd' })); //{a:'z',b:'y',c:'x',d:'w'}
// console.log(swapObjKeysWithValues({ 2: 'a', 4: 'b', 6: 'c', 8: 'd' })); //{a:'2',b:'4',c:'6',d:'8'}
// console.log(swapObjKeysWithValues({ a: 1, z: 24 })); //{1:'a',24:'z'}
// //===============================================Objects==========================================
// // Replace empty strings in object with null values
// // Write a function that takes an object as argument. Some of the property values contain empty strings. Replace empty strings and strings that contain only whitespace with null values. Return the resulting objec
// interface ObjStringNum {
//   [key: string | number]: string | number;
// }
// const replaceEmptyStrWithNull = (obj: ObjStringNum) => {
//   return Object.entries(obj).reduce((acc, [key, val]) => {
//     val.trim() === '' ? (val = null) : val;
//     return { ...acc, [key]: val };
//   }, {});
// };
// console.log(replaceEmptyStrWithNull({ a: 'a', b: 'b', c: '' })); //{ a: 'a', b: 'b', c: null }
// console.log(replaceEmptyStrWithNull({ a: '', b: 'b', c: ' ', d: 'd' }));
// console.log(replaceEmptyStrWithNull({ a: 'a', b: 'b ', c: ' ', d: '' }));
// //===============================================Objects==========================================
// // Extracting information from objects
// // Write a function that takes an object as argument containing properties with personal information. Extract firstName, lastName, size, and weight if available. If size or weight is given transform the value to a string. Attach the unit cm to the size. Attach the unit kg to the weight. Return a new object with all available properties that we are interested in
// interface InfoObj {
//   fn: string;
//   ln: string;
//   age: number;
//   size?: number;
//   email?: string;
//   weight?: number;
// }
// const extractInfoFromObj = (obj: InfoObj) => {
//   return {
//     fn: obj.fn,
//     ln: obj.ln,
//     ...(obj.size && { size: `${obj.size}cm` }),
//     ...(obj.weight && { weight: `${obj.weight}kg` }),
//   };
// };

// console.log(
//   extractInfoFromObj({
//     fn: 'Lisa',
//     ln: 'Müller',
//     age: 17,
//     size: 175,
//     weight: 67,
//   })
// );
// //{fn: 'Lisa', ln: 'Müller', size: '175cm', weight: '67kg'}
// console.log(
//   extractInfoFromObj({
//     fn: 'Martin',
//     ln: 'Harper',
//     age: 26,
//     email: 'martin.harper@test.de',
//     weight: 102,
//   })
// );
// //{fn: 'Martin', ln: 'Harper', weight: '102kg'}
// console.log(
//   extractInfoFromObj({
//     fn: 'Andrew',
//     ln: 'Harper',
//     age: 81,
//     size: 175,
//     weight: 71,
//   })
// );
// console.log(
//   extractInfoFromObj({
//     fn: 'Matthew',
//     ln: 'Müller',
//     age: 19,
//     email: 'matthew@mueller.de',
//   })
// );
// //===============================================Objects==========================================
// // Add a property to each object in array
// // Write a function that takes an array of objects and a string as arguments. Add a property with key 'continent' and value equal to the string to each of the objects. Return the new array of objects. Tipp: try not to mutate the original array

// interface Obj3 {
//   city: string;
//   country: string;
//   continent?: string;
// }

// const addPropToObjInArr = (arr: Obj3[], str: string) => {
//   return arr.map((obj) => ({ ...obj, continent: str }));
// };

// console.log(
//   addPropToObjInArr(
//     [
//       { city: 'Tokyo', country: 'Japan' },
//       { city: 'Bangkok', country: 'Thailand' },
//     ],
//     'Asia'
//   )
// );
// console.log(
//   addPropToObjInArr(
//     [
//       { city: 'Stockholm', country: 'Sweden' },
//       { city: 'Paris', country: 'France' },
//     ],
//     'Europe'
//   )
// );

// function fetchData1(url) {
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => resolve(data))
//       .catch((error) => reject(error));
//   });
// }

// function fetchData2(url) {
//   return fetch(url)
//     .then((response) => response.json())
//     .then((data) => data.name);
// }

// async function fetchData3(url) {
//   const data = await fetch(url);
//   const name = await data.json();
//   return name;
// }

// function fetchData5(url) {kochi;
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => resolve(data))
//       .catch((error) => reject(error));
//   });
// }

// function fetchData6(url) {
//   return fetch(url)
//     .then((response) => response.json())
//     .then((data) => data.name);
// }

// async function fetchData7(url) {
//   const data = await fetch(url);
//   const name = await data.json();
//   return name;
// }

//function expression
// let logMessage = function () {
//   return 'text from function expression';
// };
// console.log(logMessage());

// //arrow function
// logMessage = () => 'text from arrow function';
// console.log(logMessage());

// function pause() {
//   const start = new Date().getTime();
//   while (new Date().getTime() - start < 3000);
//   console.log('XXooXXoo');
// }
// pause();
// console.log('YYaaYYaa');

// const CACHE_VERSION = 1;
// const CURRENT_CACHES = {
//   prefetch: `prefetch-cache-v${CACHE_VERSION}`,
// };

// self.addEventListener('install', (event) => {
//   const urlsToPrefetch = [
//     './static/pre_fetched.txt',
//     './static/pre_fetched.html',
//     'https://www.chromium.org/_/rsrc/1302286216006/config/customLogo.gif',
//   ];

//   console.log(
//     'Handling install event. Resources to pre-fetch:',
//     urlsToPrefetch
//   );

//   event.waitUntil(
//     caches
//       .open(CURRENT_CACHES['prefetch'])
//       .then((cache) => {
//         return cache
//           .addAll(
//             urlsToPrefetch.map((urlToPrefetch) => {
//               return new Request(urlToPrefetch, { mode: 'no-cors' });
//             })
//           )
//           .then(() => {
//             console.log('All resources have been fetched and cached.');
//           });
//       })
//       .catch((error) => {
//         console.error('Pre-fetching failed:', error);
//       })
//   );
// });
new Promise(function (resolve, reject) {
  console.log('Starting task...');
  setTimeout(function () {
    resolve(10);
  }, 1000);
}).then(function (data) {
  console.log('Promise fulfilled');
  console.log(data);
});
