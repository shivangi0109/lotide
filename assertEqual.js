// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    // console.log("\u2705 \u2705 \u2705 Assertion Passed: " + actual + " == " + expected);
    console.log(`\u2705 \u2705 \u2705 Assertion Passed: ${actual} == ${expected}`);
  } else {
    // console.log("\uD83D\uDED1 \uD83D\uDED1 \uD83D\uDED1 Assertion Failed: " + actual + " !== " + expected);
    console.log(`\uD83D\uDED1 \uD83D\uDED1 \uD83D\uDED1 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;