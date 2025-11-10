const { NotImplementedError } = require("../lib");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str = "", options = {}) {
  const s = String(str);
  const repeatTimes = options.repeatTimes || 0;
  const separator =
    options.separator !== undefined ? String(options.separator) : "+";
  const addition =
    options.addition !== undefined ? String(options.addition) : "";
  const additionRepeatTimes = options.additionRepeatTimes || 0;
  const additionSeparator =
    options.additionSeparator !== undefined
      ? String(options.additionSeparator)
      : "|";

  let additionPart = "";
  if (additionRepeatTimes > 0) {
    const parts = [];
    for (let i = 0; i < additionRepeatTimes; i++) parts.push(addition);
    additionPart = parts.join(additionSeparator);
  } else {
    additionPart = addition;
  }

  if (repeatTimes > 0) {
    const blocks = [];
    for (let i = 0; i < repeatTimes; i++) {
      blocks.push(s + additionPart);
    }
    return blocks.join(separator);
  } else {
    return s + additionPart;
  }
}

module.exports = {
  repeater,
};
