const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`\u2705 \u2705 \u2705 Assertion Passed: ${arr1} == ${arr2}`);
  } else {
    console.log(`\uD83D\uDED1 \uD83D\uDED1 \uD83D\uDED1 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    // console.log(letter);
    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [i];
      }
    }
  }

  return results;
};

const results1 = letterPositions("lighthouse in the house");
console.log(results1);
// const results2 = letterPositions("hello");
// console.log(results2);

assertArraysEqual(results1["l"], [0]);
assertArraysEqual(results1["i"], [1, 11]);
assertArraysEqual(results1["h"], [3, 5, 15, 18]);
assertArraysEqual(results1["e"], [9, 16, 22]);
assertArraysEqual(results1["o"], [12]);

assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);