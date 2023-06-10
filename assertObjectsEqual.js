const eqObjects = require('./eqObjects');

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`\u2705 \u2705 \u2705 Assertion Passed: ${inspect(actual)} == ${inspect(expected)}`);
  } else {
    console.log(`\uD83D\uDED1 \uD83D\uDED1 \uD83D\uDED1 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;

assertObjectsEqual( { a: '1', b: 2 },  { b: 2, a: '1' });
assertObjectsEqual( { a: '1', b: 2 },  { b: 2 });