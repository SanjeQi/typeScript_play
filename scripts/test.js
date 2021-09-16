"use strict";
//TypeScript
//Enumeration - enum type - used to create a custom type where we can specify a list of values that a variable can hold
//in other words - a user friendly value for a particular numeric value
var EyeColor;
(function (EyeColor) {
    EyeColor[EyeColor["Brown"] = 1] = "Brown";
    EyeColor[EyeColor["Black"] = 2] = "Black";
    EyeColor[EyeColor["Blue"] = 3] = "Blue";
    EyeColor[EyeColor["Green"] = 4] = "Green";
})(EyeColor || (EyeColor = {}));
let myEyeColor = EyeColor.Black; //"black" is the name for the value 2 in this case
console.log(myEyeColor); // output: 2
console.log(EyeColor[myEyeColor]); //output:Black
//Arrays
let strArr1 = ['Chandler', 'Bing']; //method1
let strArr2 = ['Chandler', 'Bing']; //method2
let anyArr = ['Chandler', 100]; //method3
//Tuple
//*are special Arrays that let us specify the type of values, the array can contain
let myTuples = ['Chandler', 100];
console.log(myTuples);
myTuples.push('Bing', 200);
console.log(myTuples);
//Class Constructor -- v2 is equivalent to v1
//v1
class Person {
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
}
//v2
class Person1 {
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
}
let parsnip1 = {
    fname: 'Chandler',
    lname: 'Bing',
    age: 30,
};
console.log(parsnip1);
//# sourceMappingURL=test.js.map