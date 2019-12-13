// @flow
// Singapore
// n{6}
// possible first two digits are 01-81
import toRegexRange from "to-regex-range";

const range = toRegexRange("01", 81, {
	capture: true,
	relaxZeros: false
});

export default new RegExp(`^${range}$`);
