const {
  capitalise,
  reverseString,
  calculator,
  caeserCipher,
  analyzeArray,
} = require("./testing_practice.js");

test("capitalises first letter of string", () => {
  expect(capitalise("hello")).toBe("Hello");
  expect(capitalise("hello harry")).toBe("Hello harry");
  expect(capitalise(" hello harry")).toBe(" hello harry");
});

test("reverses a string", () => {
  expect(reverseString("hello")).toBe("olleh");
  expect(reverseString("hello harry")).toBe("yrrah olleh");
});

test("adds 2 numbers with calculator", () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test("subtracts 2 numbers with calculator", () => {
  expect(calculator.subtract(4, 2)).toBe(2);
});

test("multiplies 2 numbers with calculator", () => {
  expect(calculator.multiply(3, 3)).toBe(9);
});

test("divides 2 numbers with calculator", () => {
  expect(calculator.divide(10, 5)).toBe(2);
});

test("takes a string and runs it through a caeser cipher", () => {
  expect(caeserCipher("xyz", 3)).toBe("abc");
  expect(caeserCipher("HeLLo", 3)).toBe("KhOOr");
  expect(caeserCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("takes an array and returns object", () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);

  expect(object).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
