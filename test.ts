//TypeScript

//Declarations and Annotations
let x: number = 10;
let y: string = 'hi';
let z: boolean = true;
//----------------------------------------------
// this is done by default:
let a = 100;
//a = true; //<-- errors out boolean is not assignable to type number
let b: number = a + 2; // ok
b = a + 'hi'; //
console.log(b);
//----------------------------------------------
let info: any;
info = 10;
info = 'hello';
info = true;
//----------------------------------------------
