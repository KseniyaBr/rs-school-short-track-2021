/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let x = 0;
  const result = arr;
  const sortedArr = arr.filter((i) => i !== -1).sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      result[i] = sortedArr[x];
      x++;
    }
  }
  return result;
}

module.exports = sortByHeight;
