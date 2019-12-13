// @flow
// Spain
// n{5}
// possible first two digits are 01-52
import toRegexRange from "to-regex-range";

const range = toRegexRange("01", 52, {
	capture: true,
	relaxZeros: false
});

export default new RegExp(`^${range}[0-9]{3}$`);
