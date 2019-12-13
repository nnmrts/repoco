// @flow
// French Guiana
// 973n{2}
// impossible last two digits are 91-99
import toRegexRange from "to-regex-range";

const range = toRegexRange("00", 90, {
	capture: true,
	relaxZeros: false
});

export default new RegExp(`^973${range}$`);
