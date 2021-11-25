/*   
------------------------------------Sum of Numbers-------------------------------------------------
You are given an array of two numbers [a,b]. Find the sum of those two numbers plus the sum of all the numbers between them.

(Note: The lower number may not always be the first element in the array)



Test Case

function sum(arr) {}

sum([1, 4]) - Returns 10
sum([4, 1]) - Returns 10 
*/

function sum(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  let acc = 0;
  for (let i = min; i <= max; i++) {
    acc += i;
  }
  return acc;
}
