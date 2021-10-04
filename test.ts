//Prototypal Inheritance

/*
 Create a Programmer inheriting Person

1.Add properties pertaining to the Programmer
2.Add methods pertaining to the Programmer
3.Inherit properties from Person
4.Inherit methods from Person

1.Add properties pertaining to the Programmer 
    function Programmer (){
      this.language = language,
    }

2.Add methods pertaining to the Programmer
    Programmer.prototype.code = function (){
      console.log(`I'm coding in ${this.language}`);
      
    }
3.Inherit properties from Person
3.1 Programmer function will be invoked with the 'new' keyword
    like this: const kramer = new Programmer('kramer','JavaScript') 
3.2 This object is created and return automatically

    function Programer(name,language) {
      // this = Object.create(Programer.prototype)
      this.language = language 
      //return this
    }

3.3 Explicit bind 'this' in Programmer to Person() call
    function Programmer (name, language){
      //this = Object.create(Programer.prototype)
      Person.call(this,name)
      this.language = language 
      // return this
    }
4.Inherit methods from Person Link Programmer to Person.prototype Using Object.create()
    function Programmer(name, language){
      Person.call(this,name)
      this.language=language
    }
Programer.prototype = Object.create(Person.prototype) */

function Person(name) {
  this.name = name;
}

Person.prototype.sayMyname = function () {
  console.log(`My name is ${this.name}`);
};
Person.prototype.eat = function (food) {
  console.log(`I'm eating ${food}`);
};
Person.prototype.sleep = function () {
  console.log(`Sleeping ...`);
};

const batman = new Person('Bruce Wayne');
const superman = new Person('Clark Kent');
// console.log('Batman Object: ', batman, 'Superman Object: ', superman);

function Programmer(name, language) {
  Person.call(this, name);
  this.language = language;
}
Programmer.prototype = Object.create(Person.prototype);
Programmer.prototype.code = function () {
  console.log(`I'm coding in ${this.language}`);
};

const kramer = new Programmer('Superman', 'JavaScript');
kramer.sayMyname();
console.log(kramer.constructor); // Person --- it need to be Programmer

Programmer.prototype.constructor = Programmer;

console.log(kramer.constructor); // Programmer
kramer instanceof Programmer; // true

console.log('Kramer the coder ', kramer);
