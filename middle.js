// if length of an array is greater than 2 and if it is even, push two middle elements in an array
// if length of an array is greater than 2 and if it is even, push middle element in an array
const middle = function(array) {
  let result = [];
  if (array.length === 1 || array.length === 2) {
    result = [];
  } else if (array.length > 2 && array.length % 2 === 0) {
    result.push(array[(array.length / 2) - 1]);
    result.push(array[(array.length / 2)]);
  } else if (array.length > 2 && array.length % 2 === 1) {
    result.push(array[Math.trunc(array.length / 2)]);
  }
  return result;
};

module.exports = middle;