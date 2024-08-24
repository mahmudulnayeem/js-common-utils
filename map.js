// polyfill for map
// Array.map((item,index,arr)=>{})
Array.prototype.myMap = function (callback) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i, this));
  }
  return arr;
};

// examples

const arr = [1, 2, 3, 4, 5];
const newArr = arr.myMap((item) => item * 2);
console.log(newArr); // [2, 4, 6, 8, 10]
const newArr2 = arr.myMap((item, index) => item * index);
console.log(newArr2); // [0, 2, 6, 12, 20]
