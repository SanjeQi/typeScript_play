"use strict";
// Class Inheritance
class Parent {
    constructor(name, title) {
        this.name = name;
        this.title = title;
    }
    someParentMethod() {
        return 'This is a parent method.';
    }
}
class Child extends Parent {
    constructor(name, title, age) {
        super(name, title);
        this.age = age;
    }
    someChildMethod() {
        return 'This is a child method';
    }
}
let obj = new Parent('Parent', 'this is the parent');
console.log('obj: ', obj, 'obj.someParentMethod: ', obj.someParentMethod());
let objChild = new Child('Child', 'this is a child', 12);
console.log(objChild);
console.log(objChild.someChildMethod());
//# sourceMappingURL=test.js.map