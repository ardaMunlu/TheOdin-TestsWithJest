const { caesarCipher } = require('./learning');

test('shifts letters correctly', () => {
  expect(caesarCipher('abc', 1)).toBe('bcd');
  expect(caesarCipher('xyz', 3)).toBe('abc'); // ✅ wrap around test
});

test('preserves case', () => {
  expect(caesarCipher('AbC', 1)).toBe('BcD');
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('ignores non-alphabetic characters', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('works with negative shift', () => {
  expect(caesarCipher('def', -3)).toBe('abc');
  expect(caesarCipher('AbC', -1)).toBe('ZaB');
});

test('handles zero shift', () => {
  expect(caesarCipher('Hello, World!', 0)).toBe('Hello, World!');
});
