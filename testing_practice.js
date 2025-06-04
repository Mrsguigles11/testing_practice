function capitalise(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  let array = [];

  for (let i = string.length - 1; i >= 0; i--) {
    array.push(string.charAt(i));
  }

  return array.join("");
}

const calculator = {
  add: (a, b) => {
    return a + b;
  },
  subtract: (a, b) => {
    return a - b;
  },
  multiply: (a, b) => {
    return a * b;
  },
  divide: (a, b) => {
    return a / b;
  },
};

module.exports = { capitalise, reverseString, calculator };
