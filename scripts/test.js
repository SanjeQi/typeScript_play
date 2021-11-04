"use strict";
// Create an iterable that will accept the starting number, the ending number and an interval. Generate a range out of it
function* customRange(start = 0, end = 100, interval = 1) {
    for (let i = start; i <= end; i += interval) {
        yield i;
    }
}
const customGenerator = customRange(0, 100, 10);
for (let num of customGenerator) {
    console.log(num);
}
// the function at [Symbol.iterator] can also be a generator function
const obj = {
    [Symbol.iterator]: function* (start = 0, end = 50, interval = 1) {
        for (let i = start; i <= end; i += interval) {
            yield i;
        }
    },
};
for (let num of obj) {
    console.log(num);
}
console.log([...obj[Symbol.iterator](100, 500, 100)]);
//# sourceMappingURL=test.js.map