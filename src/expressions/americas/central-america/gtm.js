// @flow
// Guatemala
// n{5}
// possible first two digits are 01-22
import toRegexRange from "to-regex-range";

const range = toRegexRange("01", 22, {
	capture: true,
	relaxZeros: false
});

export default new RegExp(`^${range}[0-9]{3}$`);
