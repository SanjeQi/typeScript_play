"use strict";
//Var, let, const
//var: function scoped  let,const: block scoped
function addNumbers() {
    var a = 10;
    var b = 20;
    var flag = true;
    if (flag) {
        var sum = a + b;
        console.log('Inside if block', sum);
    }
    console.log('Outside if block', sum);
}
addNumbers();
//let and const
function addTwoNumbers() {
    const a = 100;
    const b = 200;
    const flag = true;
    if (flag) {
        const sum = a + b;
        console.log('Inside if block', sum);
    }
    // console.log('Outside if block', sum);
}
addTwoNumbers();
//------------------------------------------------
//Hoisting
//!means variable declarations are put into memory during the compile phase
//!!means moving variable declarations to the top of their scope
//!!!only variable declarations are hoisted to the top of the scope and not variable initialization
//var declarations are hoisted and initialized with undefined
//const and let are hoisted but are NOT initialized with undefined
//// Var Hoisting play
function hoist1() {
    var name;
    console.log('var after declaration-hoist1', name);
}
hoist1(); //undefined
function hoist2() {
    console.log('var before declaration-hoist2', name);
    var name;
}
hoist2(); //undefined
function hoist3() {
    console.log('var before declaration and initialization- hoist3', name);
    var name = 'Cosmo Kramer';
}
hoist3(); // undefined -- only variable declarations are hoisted to the top of the scope and not variable initialization
//let and const Hoisting play
function hoist4() {
    let name;
    console.log('let after the declaration - hoist4', name);
}
hoist4();
function hoist5() {
    console.log('let before the declaration - hoist5', name);
    let name;
}
hoist5();
//# sourceMappingURL=test.js.map