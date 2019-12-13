// @flow
// Brazil
// n{5}-n{3}
// impossible first two digits are 00
import toRegexRange from "to-regex-range";

const range = toRegexRange("01", 99, {
	capture: true,
	relaxZeros: false
});

export default new RegExp(`^${range}[0-9]{3}-[0-9]{3}$`);
