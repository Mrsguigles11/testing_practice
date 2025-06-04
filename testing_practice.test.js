
const {capitalise} = require('./testing_practice.js');

test('capitalises first letter of string', () => {
    expect(capitalise("hello")).toBe("Hello");
    expect(capitalise("hello harry")).toBe("Hello harry");
    expect(capitalise(" hello harry")).toBe(" hello harry");
})