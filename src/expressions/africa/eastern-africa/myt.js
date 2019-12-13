// @flow
// Mayotte
// 976n{2}
// impossible last two digits are 91-99
import toRegexRange from "to-regex-range";

const range = toRegexRange(97600, 97690, {
	capture: true,
	relaxZeros: false
});

export default new RegExp(`^${range}$`);
