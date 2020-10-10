const CustomError = require("../extensions/custom-error");

const REMOVE_FLAG = "remove"

module.exports = function transform(arr) {
	if (!Array.isArray(arr)) throw new Error()

	let removeNext = false
	const result = []

	arr.forEach((el, i, self) => {
		if (removeNext) {
			removeNext = false
			return result.push(REMOVE_FLAG)
		}
		if (i < self.length - 1) {
			if (self[i + 1] === "--discard-prev") {
				return result.push(REMOVE_FLAG)
			}
		}
		if (el === "--discard-prev") {
			return result.push(REMOVE_FLAG)
		}
		if (el === "--discard-next") {
			removeNext = true
			return result.push(REMOVE_FLAG)
		}
		if (el === "--double-next") {
			return result.push(i + 1 >= self.length ? REMOVE_FLAG : self[i + 1]);
		}
		if (el === "--double-prev") {
			if (result[i - 1] === REMOVE_FLAG) return result.push(REMOVE_FLAG)
			return result.push(i <= 0 ? REMOVE_FLAG : self[i - 1]);
		}
		return result.push(el)
	})
		return result.filter(el => el !== REMOVE_FLAG)
};
