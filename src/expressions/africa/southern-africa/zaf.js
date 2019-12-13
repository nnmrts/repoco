// @flow
// South Africa
// n{4}
// impossible first four digits are 0000,9000-9299
import toRegexRange from "to-regex-range";

const range = toRegexRange("0001", 9999, {
	capture: true,
	relaxZeros: false
});

const antiRange = toRegexRange(9000, 9299, {
	capture: true,
	relaxZeros: false
});

export default new RegExp(`^(?!${antiRange})${range}$`);
