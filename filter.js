// polyfill for filter
// Array.filter((item,index,arr)=>{}) returns a new array with all elements that pass the test implemented by the provided function.

Array.prototype.myFilter = function (callback) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};

// examples
const arr = [1, 2, 3, 4, 5];
const newArr = arr.myFilter((item) => item % 2 === 0);
console.log(newArr); // [2, 4]

const newArr2 = arr.myFilter((item, index) => item * index < 10);
console.log(newArr2); // [1, 2, 3]
