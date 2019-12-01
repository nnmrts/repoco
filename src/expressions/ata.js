// @flow
// Antarctica
// BIQQ 1ZZ
// or
// 984n{2}
import toRegexRange from "to-regex-range";

const range = toRegexRange("00", 99, {
	capture: true,
	relaxZeros: false
});

export default new RegExp(`^BIQQ 1ZZ|${range}$`);
