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

let firstName = 'Chandler';
let lastName = 'Bings';

let person = {
  firstName,
  lastName,
};

function createPerson(firstName, lastName, age) {
  let fullName = `${firstName} ${lastName}`;
  return {
    firstName,
    lastName,
    fullName,
    isSenior() {
      return age > 60;
    },
  };
}

let p = createPerson('Ross', 'Geller', 62);

console.log(p);
console.log(p.firstName);
console.log(p.lastName);
console.log(p.fullName);
console.log(p.isSenior());
// console.log(person.firstName);
// console.log(person.lastName);
