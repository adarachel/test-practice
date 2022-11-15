const stringLength = require('../tasks/task1');

test('expected length for abcde to be 5', () => {
  expect(stringLength('abcde')).toBe(5);
})

test('expected to throw Error', () => {
  expect(() => {stringLength('abcdefghijklm')}).toThrow();
})