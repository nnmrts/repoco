// @flow
// Australia
// n{4}
// impossible first two digits are 00,01,03-07
import toRegexRange from "to-regex-range";

const range = toRegexRange("0200", "9999", {
	capture: true,
	relaxZeros: false
});

const antiRange = toRegexRange("0300", "0799", {
	capture: true,
	relaxZeros: false
});

export default new RegExp(`^(?!${antiRange})${range}$`);
