const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705 \u2705 \u2705 Assertion Passed: ${actual} == ${expected}`);
  } else {
    console.log(`\uD83D\uDED1 \uD83D\uDED1 \uD83D\uDED1 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  if (arr.length <= 1) {
    return [];
  } else {
    return arr.slice(1);
  }
};

// Solution 1 -
// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case 2:
const result1 = tail(["Hello"]);
assertEqual(result1.length, 2); // ensure we get back two elements
assertEqual(result1[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result1[1], "Labs"); // ensure second element is "Labs"

// Test Case 3:
const result2 = tail([]);
assertEqual(result2.length, 2); // ensure we get back two elements
assertEqual(result2[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result2[1], "Labs"); // ensure second element is "Labs"

// Solution 2 -
// let newArray = [];
// const tail = function(array) {
//   if (array.length === 0) {
//     return;
//   } else if (array.length === 1) {
//     newArray = [];
//   } else if (array.length > 1) {
//     newArray = array;
//     newArray.slice(1);
//   }
//   return newArray;
// };

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(JSON.stringify(result), JSON.stringify(["Lighthouse", "Labs"])); // => will always fail!

// const result1 = tail(["Hello"]);
// assertEqual(JSON.stringify(result1), JSON.stringify(["Lighthouse", "Labs"]));

// const result2 = tail(["Lighthouse", "Labs"]);
// assertEqual(JSON.stringify(result2), JSON.stringify(["Lighthouse", "Labs"]));

// const result3 = tail([]);
// assertEqual(JSON.stringify(result3), JSON.stringify(["Labs"]));