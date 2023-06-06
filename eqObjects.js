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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705 \u2705 \u2705 Assertion Passed: ${actual} == ${expected}`);
  } else {
    console.log(`\uD83D\uDED1 \uD83D\uDED1 \uD83D\uDED1 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  // if length of both keys array (keys1 & keys2) are not equal, return false
  if (keys1.length !== keys2.length) {
    return false;
  }

  // for (let key of keys1) {
  //   if (object1[key] !== object2[key]) {
  //     return false;
  //   }
  // }

  for (const key of keys1) {
    const value1 = object1[key];
    const value2 = object2[key];

    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }
    } else {
      if (value1 !== value2) {
        return false;
      }
    }
  }

  return true;
};

module.exports = eqObjects;

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false

assertEqual(eqObjects(shirtObject , anotherShirtObject), true);
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true

const anotherMultiColorShirtObject1 = { size: ["medium", "small"], colors: ["red", "blue"] };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject1); // => false

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false

assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true);
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject1), false);
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false);