let displayColor = function (message, ...colors) {
  console.log(message);
  //   console.log(colors);
  console.log(arguments, arguments.length);
  for (let i in colors) {
    console.log(colors[i]);
  }
};

let message = 'List of Colors';
let colorArray = ['Orange', 'Yellow', 'Indigo'];
displayColor(message, ...colorArray);

// displayColor(message, 'Red');
// displayColor(message, 'Red', 'Blue');
// displayColor(message, 'Red', 'Blue', 'Green');
