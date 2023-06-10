const assert = require('chai').assert;
const { middle } = require('../index');

describe("#middle", () => {
  it("returns [5, 6] for [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6]);
  });

  it("returns [4, 5] for [1, 2, 3, 4, 5, 6, 7, 8]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);
  });

  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns [] for []", () => {
    assert.deepEqual(middle([]), []);
  });
});

// const assertArraysEqual = require('../assertArraysEqual');
// const middle = require('../middle');

// // For arrays with one or two elements, there is no middle. Return an empty array.
// console.log(middle([1])); // => []
// console.log(middle([1, 2])); // => []

// //For arrays with odd number of elements, an array containing a single middle element should be returned.
// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]

// // For arrays with an even number of elements, an array containing the two elements in the middle should be returned
// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
// console.log(middle([1, 2, 3, 4, 5, 6, 7, 8])); // => [4, 5]
// console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // => [5, 6]

// // TEST CASES
// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [8, 9]);