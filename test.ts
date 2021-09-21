//Scope

//Determining variable value
const a = 10;
function exampleOne() {
  const a = 20;
  console.log(a);
}
exampleOne();
console.log(a);
// what is log to the console L6:20 L10:10

//When it comes to line 6, the engine first checks if variable is present in the function scope.It is and the value is 20
//When it comes to line 10 the js engine checks if variable a is present in the global scope. It is and the value is 10

const x = 100;
function exampleTwo() {
  const y = 200;
  function inner() {
    const z = 300;
    console.log(x, y, z);
  }
  inner();
}
exampleTwo();
//R: 100,200,300
//Lexical Scoping
//! Describes how a parser resolves variable names when functions are nested
//!! 'Lexical' refers to the fact that lexical scoping uses the location where a variable is declared within the code to determine where that variable is available
//!!! When we have nested functions, the JS engine for variable lookup starts with the inner function where we are trying to access the variable and moves outwards until it reaches the global scope.
//!!!Nested functions have access to variables declared in their own scope as well as variables declared in the outer scope
