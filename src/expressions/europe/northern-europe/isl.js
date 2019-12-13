// @flow
// Iceland
// n{3}
// possible first three digits are 101-902
import toRegexRange from "to-regex-range";

const range = toRegexRange(101, 902, {
	capture: true,
	relaxZeros: false
});

export default new RegExp(`^${range}$`);
