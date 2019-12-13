// @flow
// Algeria
// n{5}
// possible first two digits are 01-48
import toRegexRange from "to-regex-range";

const provinceRange = toRegexRange("01", 43, {
	capture: true,
	relaxZeros: false
});

export default new RegExp(`^${provinceRange}[0-9]{3}$`);
