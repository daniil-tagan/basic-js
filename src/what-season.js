const CustomError = require("../extensions/custom-error");

const getMonthOrThrow = (date) => {
  try {
    return date.getUTCMonth()
  } catch (e) {
    throw new Error()
  }
}

module.exports = function getSeason(date) {
  if (!date) return "Unable to determine the time of year!"
  if (typeof date !== "object") throw new Error()

  let month = getMonthOrThrow(date)

  if (typeof month !== "number") throw new Error()
  if (month <= 1 || month === 11) return "winter"
  if (month >= 2 && month <= 4) return "spring"
  if (month >= 5 && month <= 7) return "summer"
  return "autumn (fall)"
};
