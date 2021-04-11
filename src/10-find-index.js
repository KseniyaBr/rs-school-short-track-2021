/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  const index;
  const arr = array;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      index = i;
    }
  }
  return index;
}

module.exports = findIndex;
