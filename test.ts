//TypeScript

//Enumeration - enum type - used to create a custom type where we can specify a list of values that a variable can hold
//in other words - a user friendly value for a particular numeric value
enum EyeColor {
  Brown = 1,
  Black,
  Blue,
  Green,
}

let myEyeColor = EyeColor.Black; //"black" is the name for the value 2 in this case
console.log(myEyeColor); // output: 2
console.log(EyeColor[myEyeColor]); //output:Black
//Arrays
let strArr1: string[] = ['Chandler', 'Bing']; //method1
let strArr2: Array<string> = ['Chandler', 'Bing']; //method2
let anyArr: any[] = ['Chandler', 100]; //method3

//Tuple
//*are special Arrays that let us specify the type of values, the array can contain

let myTuples: [string, number] = ['Chandler', 100];
console.log(myTuples);
myTuples.push('Bing', 200);
console.log(myTuples);

//Class Constructor -- v2 is equivalent to v1
//v1
class Person {
  public fname: string;
  public lname: string;
  constructor(fname: string, lname: string) {
    this.fname = fname;
    this.lname = lname;
  }
}
//v2
class Person1 {
  constructor(public fname: string, public lname: string) {}
}

//Interfaces - the most flexible way of describing types in TypeScript

interface Parsnip {
  fname: string;
  lname: string;
  age?: number; //age?: will make the property optional
}

let parsnip1: Parsnip = {
  fname: 'Chandler',
  lname: 'Bing',
  age: 30,
};

console.log(parsnip1);
let parsnip2: Parsnip = {
  fname: 'Cosmo',
  lname: 'Kramer',
};
