// Class Inheritance

class Person {
  constructor(name) {
    console.log(name + 'Person Constructor');
  }
  getID() {
    return 10;
  }
}

class Employee extends Person {
  constructor(name) {
    super(name);
    console.log(name + ' Employee Constructor');
  }
  getID() {
    return super.getID();
  }
}

// let person = new Person();
// console.log('person instance', person);

let employee = new Employee('Chandler ');
console.log(employee.getID());

// console.log('employee instance', employee);
