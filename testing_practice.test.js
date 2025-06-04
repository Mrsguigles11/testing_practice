
const {capitalise, reverseString} = require('./testing_practice.js');

test('capitalises first letter of string', () => {
    expect(capitalise("hello")).toBe("Hello");
    expect(capitalise("hello harry")).toBe("Hello harry");
    expect(capitalise(" hello harry")).toBe(" hello harry");
})

test('reverses a string', () => {
    expect(reverseString("hello")).toBe("olleh");
    expect(reverseString("hello harry")).toBe("yrrah olleh");
})

