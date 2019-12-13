// @flow
// Colombia
// n{6}
// possible first two digits are 00-32
import toRegexRange from "to-regex-range";

const range = toRegexRange("00", 32, {
	capture: true,
	relaxZeros: false
});

export default new RegExp(`^${range}[0-9]{4}$`);
