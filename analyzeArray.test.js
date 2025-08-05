
const { analyzeArray } = require('./learning');

test('analyzes a standard array', () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5
  });
});

test('analyzes array with negative numbers', () => {
  expect(analyzeArray([-3, -1, -2])).toEqual({
    average: -2,
    min: -3,
    max: -1,
    length: 3
  });
});

test('returns error message for empty array', () => {
  expect(analyzeArray([])).toBe('Input must be a non-empty array of numbers');
});

test('returns error message for non-array input', () => {
  expect(analyzeArray('not an array')).toBe('Input must be a non-empty array of numbers');
});

test('works with one element', () => {
  expect(analyzeArray([7])).toEqual({
    average: 7,
    min: 7,
    max: 7,
    length: 1
  });
});
