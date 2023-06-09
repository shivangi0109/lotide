const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705 \u2705 \u2705 Assertion Passed: ${actual} == ${expected}`);
  } else {
    console.log(`\uD83D\uDED1 \uD83D\uDED1 \uD83D\uDED1 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {

  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;

// Solution 2 - Based on the tip
// const findKey = function(object, callback) {
//   const keys = Object.keys(object);

//   for (const key of keys) {
//     if (callback(object[key])) {
//       return key;
//     }
//   }
//   return undefined;
// };

const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"
console.log(result1);

const result2 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 4) // => undefined
console.log(result2);

assertEqual(result1, "noma");
assertEqual(result2, undefined);