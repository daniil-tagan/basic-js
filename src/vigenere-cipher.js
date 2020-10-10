const CustomError = require("../extensions/custom-error");

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const keyToStrLength = (key, str) => key.repeat(str.length / key.length + 1).substring(0, str.length).toUpperCase()
const validate = (...values) => values.forEach(v => {
  if (!v) throw new Error()
})

class VigenereCipheringMachine {
  constructor(direction) {
    this.direction = direction === undefined ? true : direction
  }

  encrypt(str, key) {
    return this.process(str, key)
  }    

  decrypt(str, key) {
    return this.process(str, key, "decrypt")
  }

  process(str, key, mode = "encrypt") {
    validate(str, key)
    key = keyToStrLength(key, str)

    let otherSymbolsCount = 0
    let result = str.toUpperCase().split("").map((c, i) => {
      let cIndex = ALPHABET.indexOf(c)
      if (cIndex === -1) {
        otherSymbolsCount++
        return c
      }

      let kIndex = ALPHABET.indexOf(key[i - otherSymbolsCount])
      if (kIndex === -1) throw new Error()

      return ALPHABET[
        ((ALPHABET.length + (mode === "decrypt" ? cIndex - kIndex : cIndex + kIndex)) % ALPHABET.length)
      ]
    })

    return (this.direction ? result : result.reverse()).join("")
  }
}

module.exports = VigenereCipheringMachine;
