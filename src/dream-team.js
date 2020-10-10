const CustomError = require("../extensions/custom-error");

const isWord = (a) => {
  if (!a) return false
  if (typeof a === "string") return true
}

const firstChar = (a) => {
  return a.trim()[0].toUpperCase()
}

module.exports = function createDreamTeam(arg) {
  return Array.isArray(arg) ? arg.filter(isWord).map(firstChar).sort().join("") : false
};
