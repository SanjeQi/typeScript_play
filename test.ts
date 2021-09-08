// Destructuring - Objects

//  using aliases
let employee = {
  fname: 'Chandler',
  lname: 'Bing',
  gender: 'Female',
};

let { fname: f, lname: l, gender: g } = employee;
console.log(f, l, g);
