const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  return arr
    .map(val => val.filter(v => v === "^^").length)
    .reduce((a, b) => a + b, 0)
};
