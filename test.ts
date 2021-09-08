class Person {
  //using a constructor method - object creation - only one constructor per class definition
  constructor(name) {
    this.name = name;
    console.log(this.name + ' Constructor');
  }
  // using a static method ---called with Person.staticMethod(), so can be called with the class and not the object
  static staticMethod() {
    console.log('Static Method');
  }
  // using a prototype method - can be called with each object ex : p :  p.greet()
  greet() {
    console.log(`Hello ${this.name}`);
  }
}

let p = new Person('Chandler');

Person.staticMethod();

p.greet();
