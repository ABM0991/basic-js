const { NotImplementedError } = require("../lib");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  _validateArgs(a, b) {
    if (a === undefined || b === undefined)
      throw new Error("Incorrect arguments!");
  }

  _process(message, key, encode = true) {
    this._validateArgs(message, key);
    const m = String(message).toUpperCase();
    const k = String(key).toUpperCase();
    const A = "A".charCodeAt(0);
    let res = "";
    let ki = 0;
    for (let i = 0; i < m.length; i++) {
      const ch = m[i];
      const code = ch.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        const keyChar = k[ki % k.length];
        const keyShift = keyChar.charCodeAt(0) - A;
        const msgShift = code - A;
        let out;
        if (encode) {
          out = (msgShift + keyShift) % 26;
        } else {
          out = (msgShift - keyShift + 26) % 26;
        }
        res += String.fromCharCode(A + out);
        ki++;
      } else {
        res += ch;
      }
    }
    if (!this.direct) {
      res = res.split("").reverse().join("");
    }
    return res;
  }

  encrypt(message, key) {
    return this._process(message, key, true);
  }

  decrypt(encryptedMessage, key) {
    return this._process(encryptedMessage, key, false);
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
