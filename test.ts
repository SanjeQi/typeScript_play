// Arrow function

const person1 = {
  name1: 'Cosmo Kramer',
  hobbies1: ['chess, climbing'],
  printBio1() {
    const printHobbies1 = function () {
      return `${this.hobbies1[0]} and ${this.hobbies1[1]}`;
    };
    console.log(`My name is ${this.name1}`);
    // console.log(`I like ${printHobbies1()}`);
  },
};

person1.printBio1();
// from line:10 : My name Cosmo Kramer
// from line: 11 : Error out hobbies1 undefined

const person2 = {
  name2: 'George Constanta',
  hobbies2: ['sport', 'architecture'],
  printBio2() {
    const printHobbies2 = () => {
      return `${this.hobbies2[0]} and ${this.hobbies2[1]}`;
    };
    console.log(`My name is ${this.name2}`);
    console.log(`I like ${printHobbies2()}`); //
  },
};

person2.printBio2();
