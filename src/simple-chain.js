const CustomError = require("../extensions/custom-error");

const chainMaker = {
  items: [],
  getLength() {
    return this.items.length
  },
  addLink(value) {
    this.items.push(value)
    return this
  },
  removeLink(position) {
    if (position > this.items.length || position < 0) {
      this.items = []
      throw new Error()
    }
    this.items.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this.items = this.items.reverse()
    return this
  },
  finishChain() {
    let result = this.items.map(it => `( ${it} )`).join("~~")
    this.items = []
    return result
  }
};

module.exports = chainMaker;
