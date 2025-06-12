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

function caeserCipher(string, factor) {
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
                    "n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let shiftedAlphabet = [];
  let array = [];

  for (let i = factor; i < alphabet.length; i++) {
    shiftedAlphabet.push(alphabet[i]);
  }
  for (let i = 0; i < factor; i++) {
    shiftedAlphabet.push(alphabet[i]);
  }

  for (let i = 0; i < string.length; i++) {
    let specialChars = /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/;
    if (specialChars.test(string.charAt(i))) {
      array.push(string.charAt(i));
      continue;
    }

    if (checkCase(string.charAt(i))) {
      const index = alphabet.findIndex(
        (letter) => letter === string.charAt(i).toLowerCase()
      );
      array.push(shiftedAlphabet[index].toUpperCase());
      continue;
    }

    const index = alphabet.findIndex((letter) => letter === string.charAt(i));
    array.push(shiftedAlphabet[index]);
  }

  return array.join("");
}

function checkCase(character) {
  if (character === character.toUpperCase()) {
    return true;
  }
}

function analyzeArray(array) {
  let arraySorted = array.sort((a, b) => a - b);

  let object = {
    average:
      arraySorted.reduce((accum, curr) => {
        return accum + curr;
      }, 0) / arraySorted.length,
    min: arraySorted[0],
    max: arraySorted[arraySorted.length - 1],
    length: arraySorted.length,
  };

  return object;
}

module.exports = {
  capitalise,
  reverseString,
  calculator,
  caeserCipher,
  analyzeArray
};
