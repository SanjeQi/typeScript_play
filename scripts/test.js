"use strict";
// let displayColor = function (message, ...colors) {
//   console.log(message);
//   //   console.log(colors);
//   console.log(arguments, arguments.length);
//   for (let i in colors) {
//     console.log(colors[i]);
//   }
// };
// let message = 'List of Colors';
// let colorArray = ['Orange', 'Yellow', 'Indigo'];
// displayColor(message, ...colorArray);
// // displayColor(message, 'Red');
// // displayColor(message, 'Red', 'Blue');
// // displayColor(message, 'Red', 'Blue', 'Green');
// Object Literals p1
// function createPerson(firstName, lastName, age) {
//   let fullName = `${firstName} ${lastName}`;
//   return {
//     firstName,
//     lastName,
//     fullName,
//     isSenior() {
//       return age > 60;
//     },
//   };
// }
// let p = createPerson('Ross', 'Geller', 62);
// console.log(p);
// console.log(p.firstName);
// console.log(p.lastName);
// console.log(p.fullName);
// console.log(p.isSenior());
// console.log(person.firstName);
// console.log(person.lastName);
// Object Literals p2
// 1. Spaces in object properties
const per = {
    'first name': 'Chandler',
};
console.log(per['first name']);
//2. Variables as properties name
const ln = 'last name';
const person = {
    'first name': 'Chandler',
    [ln]: 'Bing',
};
console.log(person);
//# sourceMappingURL=test.js.map