const { decorateObject } = require("../lib");
const { NotImplementedError } = require("../lib");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = (function () {
  let arr = [];

  return {
    getLength() {
      return arr.length;
    },
    addLink(value) {
      arr.push(`( ${value === undefined ? "" : String(value)} )`);
      return this;
    },
    removeLink(position) {
      if (
        !Number.isInteger(position) ||
        position < 1 ||
        position > arr.length
      ) {
        arr = []; //reset
        throw new Error("You can't remove incorrect link!");
      }
      arr.splice(position - 1, 1);
      return this;
    },

    reverseChain() {
      arr.reverse();
      return this;
    },

    finishChain() {
      const res = arr.join("~~");
      arr = [];
      return res;
    },
  };
})();

module.exports = {
  chainMaker,
};
