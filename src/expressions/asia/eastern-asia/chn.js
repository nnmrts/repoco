// @flow
// China
// n{6}
// impossible first two digits are 00
import toRegexRange from "to-regex-range";

const range = toRegexRange("010000", 999999, {
	capture: true,
	relaxZeros: false
});

export default new RegExp(`^${range}$`);
