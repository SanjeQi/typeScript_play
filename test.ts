// Set

/*
The Set Object in JavaScript ley you store unique values of any type
 */
// --- Methods on the set object ---
const set = new Set();
//1.Append Values .add()
set.add(1);
set.add(2);
set.add(3);
set.add(3); // Does not get added
//2.Size set.size
set.size;
//3.Existence of a value '.has(value)'
set.has(2);
//4.Remove a specific value and empty the set
set.delete(3); // removes 3 from the set
set.clear(); // empty the set

// --- Iterating over a set object ---
set.add(1);
set.add(2);
set.add(3);
set.add(4);
for (let value of set) {
  console.log(value);
}

// --- Set and Array Conversion
// * Array to Set
const numArr = [1, 2, 3, 4, 5, 5, 3, 2];
const numSet = new Set(numArr); //Set(5) {1,2,3,4,5}
// * Set to Array
const arrFromSet = [...numSet];
