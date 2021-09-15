//Generator
//-is a special function capable of pausing and resuming execution
//-use to simplify the code when I write custom iterator

function* createGenerator() {
  yield 1;
  console.log('After 1 yield');
  yield 2;
}

let myGen = createGenerator();
console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());

//Creating a custom iterator

let person = {
  fname: 'Chandler',
  lname: 'Bing',
};
person[Symbol.iterator] = function* () {
  let properties = Object.keys(person);
  for (let t of properties) {
    yield this[t];
  }
  for (let p of person) {
    console.log(p);
  }
};
