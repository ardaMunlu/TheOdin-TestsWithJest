const { calculator } = require('./learning');

test('adds two numbers correctly', () => {
  expect(calculator.add(2, 3)).toBe(5);
  expect(calculator.add(-2, 2)).toBe(0);
});

test('subtracts two numbers correctly', () => {
  expect(calculator.subtract(5, 2)).toBe(3);
  expect(calculator.subtract(2, 5)).toBe(-3);
});

test('multiplies two numbers correctly', () => {
  expect(calculator.multiply(3, 4)).toBe(12);
  expect(calculator.multiply(-2, 5)).toBe(-10);
});

test('divides two numbers correctly', () => {
  expect(calculator.divide(10, 2)).toBe(5);
  expect(calculator.divide(7, 2)).toBe(3.5);
});

test('returns error string when dividing by zero', () => {
  expect(calculator.divide(5, 0)).toBe('Erorr'); // dikkat: fonksiyondaki yazım "Erorr"
});
