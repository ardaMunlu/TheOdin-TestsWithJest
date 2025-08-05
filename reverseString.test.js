const { reverseString } = require('./learning');

test('returns an empty string if input is empty', () => {
  expect(reverseString('')).toBe('');
});