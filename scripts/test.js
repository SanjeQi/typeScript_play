"use strict";
//Symbols - always creates an unique id -- used in objet properties
let s = Symbol('First Symbol');
console.log(typeof s);
console.log(s);
console.log(s.toString());
let s2 = Symbol();
let s3 = Symbol();
console.log(s2 === s3); // false - unique id
s2 = Symbol('Test');
s3 = Symbol('Test');
console.log(s2 === s3); // false - it doesn't matter the description a symbol is always going to create a unique id.
//I have created a new symbol, need to get hold of that symbol to reuse it in the same file: symbol registry
let s4 = Symbol.for('regSymbol'); //Symbol.for() doesn't add the symbol right away, it checks if a symbol with a key of 'regSymbol' already exists in the registry (if it does => it will return it here to s4), if it doesn't exists it will be created.
let s5 = Symbol.for('regSymbol');
console.log(s4 === s5); // true - no idea what the id's are for s4 and s5 but I know they are equal
//Want to find out the key that was associated with the symbol, when the symbol was added to the global registry:: Symbol.keyFor() ::
console.log(Symbol.keyFor(s4)); // 'regSymbol'
//Where to use: Object properties :
let fname = Symbol();
let person1 = {
    [fname]: 'Chandler Bing',
};
let person2 = {
    firstName: 'Larry David',
};
console.log(Object.getOwnPropertyNames(person1)); //output::[]:: "fname" property  is NOT listed out --- because is a Symbol
console.log(Object.getOwnPropertyNames(person2)); //output::['firstName']:: property is listed out
console.log(Object.getOwnPropertySymbols(person1));
//# sourceMappingURL=test.js.map