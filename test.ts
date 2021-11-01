// Iterator object : next() and return() --- iterator from customRange object

const iterator = {
  next: function () {
    const result = { value: counter, done: false };
    if (counter <= end) {
      counter += setInterval;
      return result;
    }
    return { done: true };
  },
  return: () => {
    console.log('Cleaning up...');
    return { done: true };
  },
};

// the return() method is invoked when the iteration is stopped prematurely
for (const num of customRange) {
  if (num > 10) {
    break;
  }
  console.log(num);
}
