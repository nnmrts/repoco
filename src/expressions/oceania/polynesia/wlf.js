// @flow
// Wallis and Futuna
// 986n{2}
// possible last two digits are 00-90
import toRegexRange from "to-regex-range";

const range = toRegexRange("00", 90, {
	capture: true,
	relaxZeros: false
});

export default new RegExp(`^986${range}$`);
