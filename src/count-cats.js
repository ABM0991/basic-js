const { NotImplementedError } = require("../lib");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  if (!Array.isArray(matrix)) return 0;

  let cnt = 0;

  for (const row of matrix) {
    if (!Array.isArray(row)) continue;
    for (const item of row) {
      if (item === "^^") cnt++;
    }
  }
  return cnt;
}

module.exports = {
  countCats,
};
