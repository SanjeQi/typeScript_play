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

// // Object Literals p2
// // 1. Spaces in object properties

// const per = {
//   'first name': 'Chandler',
// };

// console.log(per['first name']);

// // 2. Variables as properties name
// const ln = 'last name';
// const person = {
//   'first name': 'Chandler',
//   [ln]: 'Bing',
// };

// console.log(person);

//Destructuring - Arrays

// // Mapping one to one
// let employee = ['Chandler', 'Bing', 'Male'];

// let [firstName, lastName, gender] = employee;

// console.log(firstName, lastName, gender);

// // 2 to 3 export

// let employee = ['Chandler', 'Bing'];

// let [firstName, lastName, gender] = employee;

// console.log(firstName, lastName, gender);

// // omitting arguments

// let employee = ['Chandler', 'Bing', 'Male'];

// let [, , gender] = employee;

// console.log(gender);

// // // with rest operator

// let employee = ['Chandler', 'Bing', 'Male'];

// let [firstName, ...elements] = employee;

// console.log(firstName, elements);

// // with default values

let employee = ['Chandler', 'Bing'];

let [firstName, lastName, gender = 'Male'] = employee;

console.log(firstName, lastName, gender);
