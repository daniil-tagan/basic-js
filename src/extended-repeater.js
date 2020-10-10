const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let additional = ""
  if (options.addition !== undefined) {
    additional = [...Array(options.additionRepeatTimes ? options.additionRepeatTimes : 1).keys()]
      .map(() => '' + options.addition)
      .join(options.additionSeparator ? `${options.additionSeparator}` : "|")
  }
  return [...Array(options.repeatTimes ? options.repeatTimes : 1).keys()].map(() => str + additional).join(options.separator ? `${options.separator}` : "+")
};
  