// polyfill for call
// Function.call(thisArg, arg1, arg2, ...)

Function.prototype.myCall = function (context = {}, ...args) {
  // checking if the caller is a function
  if (typeof this !== "function") {
    throw new TypeError(this + " is not a function");
  }
  context.fn = this;
  context.fn(...args);
};

// examples

const obj = {
  name: "John Doe",
};

function greeting(greeting) {
  console.log(`${greeting} ${this.name}`);
}

greeting.myCall(obj, "Hello"); // Hello John Doe
