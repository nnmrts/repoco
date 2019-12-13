// @flow
// Italy
// n{5}
// possible first three digits are 001-981
import toRegexRange from "to-regex-range";

const range = toRegexRange("001", 981, {
	capture: true,
	relaxZeros: false
});

export default new RegExp(`^${range}[0-9]{2}$`);
