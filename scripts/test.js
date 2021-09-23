"use strict";
// this Keyword -is basically the execution context of a function call
//it allows us to introduce reusability by allowinf 'this' value to be dynamic, based on how a function is invoke
//we can determine the value of 'this' keyword by how a function is called
function sayMyNameEx(name) {
    console.log(`My name is ${name}`);
}
sayMyNameEx('Walter White'); // I can determine what is logged to the console by how a function is called
sayMyNameEx('Heisenberg');
// Four ways to invoke a function in JS :
// Obs! each serves as rule in determining what 'this' keyword is referencing
//1.Implicit binding
//2.Explicit binding
//3.'new' binding
//4.Default binding
//------ Order of precedence:  ------
//1.'new' binding
//2. Explicit Binding
//3. Implicit Binding
//4. Default binding
// ------------------ 1.Implicit binding ----------------------------------------
const person1 = {
    name: 'Walter',
    sayMyNameEx() {
        console.log(`My name is ${this.name}`);
    },
};
person1.sayMyNameEx(); //when a function is invoked with the dot notation, the object to the left of that dot is what - 'this' keyword is referencing (person)
// ------------------ 2.Explicit Binding ----------------------------------------
//2.Explicit binding - call() and apply() - invokes a function right away with the context I specify //  bind() - instead of invoking the function, it returns a new function that I can invoke whenever I wish
//!!! call() - takes in comma separated arguments  -- cc -- call + comma
//!!! apply() - takes in an array of arguments  -- aa -- apply + array
//!!! bind() - takes in comma separated arguments
// using call method - every function has a built in method named 'call' which allows you to specify the context with which a function is invoked
// the first argument passed to call is what 'this' keyword inside sayMyName2 is referencing
//--------call()---------
const person2 = {
    name: 'Walter form person 2',
};
function sayMyName2() {
    console.log(`My name is ${this.name}`);
}
sayMyName2.call(person2); // the first argument passed to the call is what 'this' keyword sayMyName is referencing
// with addition arguments
function sayMyName3(hobby1, hobby2) {
    console.log(`My name is ${this.name} and I love ${hobby1} and ${hobby2}`);
}
sayMyName3.call(person2, 'Tennis', 'Piano Playing');
//--------apply()-----
// using apply method - every function has a built in method named 'apply' which allows you to specify the context with which a function is invoked
// apply is similar with call but after the first argument, it expects an array
// the first argument passed to call is what 'this' keyword inside sayMyName2 is referencing
sayMyName3.apply(person2, ['Tennis', 'Piano Playing']);
//--------bind()-----
// similar to apply and call but instead of invoking the function, it returns a new function that I can invoke whenever I wish
const person3 = {
    name: 'Walter form person3',
};
function sayMyName4(hobby1, hobby2) {
    console.log(`My name is ${this.name} and I like ${hobby1} and ${hobby2}`);
}
const sayMyNamePerson4 = sayMyName4.bind(person3, 'chess', 'climbing');
sayMyNamePerson4();
// -----------------------3.'new' binding ---------------------------------------
//Constructor function
//! when a function is invoked with the 'new' keyword, within that function this keyword will always reference a new empty object
function Person(name) {
    //this = {}    <-- under the hood
    this.name = name;
}
const p1 = new Person('Walter White');
const p2 = new Person('Heisenberg');
console.log(p1, p2);
// -----------------------4.Default Binding -------------------------------------
//fallback if none of the other  three rules are matched
//If none of the three rules are satisfied, JavaScript will default to the global scope and set 'this' keyword to the window object
//ex1 - no variable name defined
function sayMyName5() {
    console.log(`My mane is ${this.name}`);
}
sayMyName5(); // TypeError: Cannot read properties of undefined (name)
//ex 2 - with name defined in the global scope
const name100 = 'Walter While';
function sayMyName6() {
    console.log(`My name is ${this.name100}`);
}
sayMyName6(); /// ?? still errors out name100 undefined ????
//# sourceMappingURL=test.js.map