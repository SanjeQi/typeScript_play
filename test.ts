// Maps - iterating over maps

let myMap = new Map([
  ['fname', 'Chandler'],
  ['lname', 'Bing'],
]);

// Getting the keys - fname, lname
for (let key of myMap.keys()) {
  console.log(key);
}
// Getting the values - Chandler , Bing
for (let value of myMap.values()) {
  console.log(value);
}
//Getting the keys and the values
for (let entry of myMap.entries()) {
  console.log('entries in myMap', entry);
}
//Getting the keys and values using destructuring
for (let [key, value] of myMap.entries()) {
  console.log(key, value);
}
