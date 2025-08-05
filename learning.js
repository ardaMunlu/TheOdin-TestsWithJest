function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0){
      return 'Erorr'
    }
    return a / b;
  }
};


function caesarCipher(str, shift) {
  return str.split('').map(char => {
    const code = char.charCodeAt(0);

    // Uppercase A-Z
    if (code >= 65 && code <= 90) {
      return String.fromCharCode(((code - 65 + shift) % 26 + 26) % 26 + 65);
    }

    // Lowercase a-z
    if (code >= 97 && code <= 122) {
      return String.fromCharCode(((code - 97 + shift) % 26 + 26) % 26 + 97);
    }

    // Non-alphabetic characters stay the same
    return char;
  }).join('');
}

function analyzeArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return 'Input must be a non-empty array of numbers';
  }

  const sum = arr.reduce((total, num) => total + num, 0);

  return {
    average: sum / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length
  };
}

module.exports = {
  capitalize,
  reverseString,
  caesarCipher,
  analyzeArray,
  calculator
};