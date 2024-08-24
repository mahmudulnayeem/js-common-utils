/**
 * @param {function} callback  function to be debounced
 * @param {number} delay default 300
 * @returns callback function with debounce functionality
 */
const debounce = (callback, delay = 300) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

// example

const saveInput = () => {
  console.log("Saving data");
};

const processChange = debounce(saveInput, 500);
