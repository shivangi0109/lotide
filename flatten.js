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

// Note that this implementation handles one level of nesting.
// For unlimited levels of nesting, recursion would be required.
const flatten =  function(array) {
  const flattenedArray = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    /* If an element is an array, it is spread using the spread operator (...) and its individual elements are pushed to the flattenedArray
    If an element is not an array, it is directly pushed to the flattenedArray
    */
    if (Array.isArray(element)) {
      flattenedArray.push(...element);
    } else {
      flattenedArray.push(element);
    }
  }
  return flattenedArray;
};

module.exports = flatten;

// console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
// console.log(flatten([[0, 1], [2, 3], [4, 5]]));

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([[0, 1], [2, 3], [4, 5]]), [0, 1, 2, 3, 4, 5]);
assertArraysEqual(flatten([[0, 1], [2, 3], [4, 5]]), [0, 1, 2, 3, 4, 5, 6]);