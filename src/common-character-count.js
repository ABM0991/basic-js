const { NotImplementedError } = require("../lib");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  if (typeof s1 !== "string" || typeof s2 !== "string") return 0;

  const a1 = s1.split("");
  const a2 = s2.split("");
  let count = 0;

  for (const ch of a1) {
    const i = a2.indexOf(ch);
    if (i !== -1) {
      count++;
      a2.splice(i, 1);
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount,
};
