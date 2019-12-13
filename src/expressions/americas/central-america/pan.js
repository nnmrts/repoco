// @flow
// Panama
// n{4}
// possible first two digits are 01-10
import toRegexRange from "to-regex-range";

const range = toRegexRange("01", 10, {
	capture: true,
	relaxZeros: false
});

export default new RegExp(`^${range}[0-9]{2}$`);
