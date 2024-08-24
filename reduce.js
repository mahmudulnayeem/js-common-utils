//polyfill of reduce
// Array.reduce(callback(accumulator, currentValue, index, array), initialValue)

Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator
      ? callback(accumulator, this[i], i, this)
      : this[i];
  }
  return accumulator;
};

// example
const arr = [1, 2, 3, 4, 5];
const sum = arr.myReduce((acc, item) => acc + item, 0);
console.log(sum); // 15
