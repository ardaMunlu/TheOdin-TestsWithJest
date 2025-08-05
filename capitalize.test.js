// capitalize.test.js
const { capitalize } = require('./learning');


test('capitalizes the first letter of a lowercase word', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('capitalizes the first letter of an uppercase word (no change)', () => {
  expect(capitalize('World')).toBe('World');
});

test('returns an empty string if input is empty', () => {
  expect(capitalize('')).toBe('');
});

test('only changes the first letter, leaves the rest as-is', () => {
  expect(capitalize('javaScript')).toBe('JavaScript');
});

test('handles non-alphabetic first character', () => {
  expect(capitalize('1hello')).toBe('1hello');
});

test('works with a single character', () => {
  expect(capitalize('a')).toBe('A');
});