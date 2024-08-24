// polyfill for apply
// Function.apply(thisArg, [argsArray])

Function.prototype.myApply = function (thisArg, argsArray = []) {
  if (!Array.isArray(argsArray)) {
    throw new TypeError("Argument must be an array");
  }
  thisArg.fn = this;
  thisArg.fn(...argsArray);
};

// examples

const obj = {
  name: "John Doe",
};

function greeting(greeting) {
  console.log(`${greeting} ${this.name}`);
}

Math.max.myApply(null, [1, 2, 3]); // Hello John Doe
