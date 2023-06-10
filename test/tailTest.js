const assert = require('chai').assert;
const { tail } = require('../index');

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });

  it("returns ['4', '3', '7'] for ['1', '4', '3', '7']", () => {
    assert.deepEqual(tail(['1', '4', '3', '7']), ['4', '3', '7']);
  });

  it("returns [5, 7, 4] for [1, 5, 7, 4]", () => {
    assert.deepEqual(tail([1, 5, 7, 4]), [5, 7, 4]);
  });

  it("returns [] for ['Hello']", () => {
    assert.deepEqual(tail(['Hello']), []);
  });

  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
});

// const assertEqual = require('../assertEqual');
// const tail = require('../tail');

// // Test Case 1: Check the returned array elements
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// // Test Case 2:
// const result1 = tail(["Hello"]);
// assertEqual(result1.length, 2); // ensure we get back two elements
// assertEqual(result1[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result1[1], "Labs"); // ensure second element is "Labs"

// // Test Case 3:
// const result2 = tail([]);
// assertEqual(result2.length, 2); // ensure we get back two elements
// assertEqual(result2[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result2[1], "Labs"); // ensure second element is "Labs"