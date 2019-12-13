// @flow
// Réunion
// 974n{2}
// impossible last two digits are 91-99
import toRegexRange from "to-regex-range";

const range = toRegexRange(97400, 97490, {
	capture: true,
	relaxZeros: false
});

export default new RegExp(`^${range}$`);
