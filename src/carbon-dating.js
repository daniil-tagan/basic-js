const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(arg) {
  if (!arg || typeof arg !== "string") return false
  let num = parseFloat(arg)
  if (!num || num >= 15 || num <= 0) return false
  return Math.ceil(
    Math.log(MODERN_ACTIVITY / num) / (0.693 / HALF_LIFE_PERIOD)
  )
}
