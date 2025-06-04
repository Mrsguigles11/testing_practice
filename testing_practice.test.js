
const {capitalise, reverseString, calculator} = require('./testing_practice.js');

test('capitalises first letter of string', () => {
    expect(capitalise("hello")).toBe("Hello");
    expect(capitalise("hello harry")).toBe("Hello harry");
    expect(capitalise(" hello harry")).toBe(" hello harry");
})

test('reverses a string', () => {
    expect(reverseString("hello")).toBe("olleh");
    expect(reverseString("hello harry")).toBe("yrrah olleh");
})

test('adds 2 numbers with calculator', () => {
    expect(calculator.add(2, 2)).toBe(4);
})

test('subtracts 2 numbers with calculator', () => {
    expect(calculator.subtract(4, 2)).toBe(2);
})

test('multiplies 2 numbers with calculator', () => {
    expect(calculator.multiply(3, 3)).toBe(9);
})

test('divides 2 numbers with calculator', () => {
    expect(calculator.divide(10, 5)).toBe(2);
})