"use strict";
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
//# sourceMappingURL=test.js.map