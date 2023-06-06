const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705 \u2705 \u2705 Assertion Passed: ${actual} == ${expected}`);
  } else {
    console.log(`\uD83D\uDED1 \uD83D\uDED1 \uD83D\uDED1 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  // split the string having spaces, which will convert the string into arrays
  let newString = string.split(" ");
  // console.log(newString);

  // to convert back the arrays into string, we need to use join
  newString = newString.join('');
  // console.log(newString);

  let results = {};

  for (let char of newString) {
    // console.log(char);
    if (results[char]) {
      results[char] += 1;
    } else {
      results[char] = 1;
    }
  }

  return results;
};

module.exports = countLetters;

const result1 = countLetters('LHL');
console.log(result1);
const result2 = countLetters("lighthouse in the house");
console.log(result2);

assertEqual(result1["L"], 2);
assertEqual(result1["H"], 1);
assertEqual(result2["l"], 1);
assertEqual(result2["h"], 4);
assertEqual(result2["n"], 2);