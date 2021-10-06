// Exercise Problem - Chaining methods on a class

/**
 * 1.Create a class called Calculator
 * 2.Calculator should always have a property 'value' that always starts at 0
 * 3.Calculator should contain three methods: add,subtract,print
 * 4.'add' and 'subtract' accept a number or arguments and perform the corresponding  operation, on the current value stored in the 'value' property
 * 5.print will log the 'value' to the console
 * 6.Create another class call ScientificCalculator with extends Calculator Class
 * 7.ScientificCalculator should contain one method called square which will square the value.
 * 8.Create an instance of the ScientificCalculator and perform some operations
 * 9.The operations should be chainable 
 * Ex:
  const s = new ScientificCalculator()
  s.add(10).sub(5).square().print() -> log 25 to the console 
 * 
 */

class Calculator {
  constructor() {
    this.value = 0;
  }
  add(num) {
    this.value += num;
    return this;
  }
  sub(num) {
    this.value -= num;
    return this;
  }
  print() {
    console.log(this.value);
  }
}

class ScientificCalculator extends Calculator {
  square() {
    this.value *= this.value;
    return this;
  }
}

const s = new ScientificCalculator();
s.add(12).sub(1).square().print();

// const c = new Calculator(100);
// console.log(calcu.sub(5).sub(3));

//Obs by returning this I can chain methods present in a Class (returning the same instance of ScientificCalculator on which I can call the methods again )
