// @flow
// Turkey
// n{5}
// impossible first two digits are 00,82-99
import toRegexRange from "to-regex-range";

const range = toRegexRange("01", 81, {
	capture: true,
	relaxZeros: false
});

export default new RegExp(`^${range}$`);
