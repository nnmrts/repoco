// @flow
// Australia
// n{4}
// impossible first two digits are 00,01,03-07
import toRegexRange from "to-regex-range";

import full2NumberDigits from "../../../helpers/full/number/full-2-number-digits.js";

const range = toRegexRange("02", "99", {
	capture: true,
	relaxZeros: false
});

const antiRange = toRegexRange("03", "07", {
	capture: true,
	relaxZeros: false
});

export default new RegExp(`^(?!${antiRange})${range}${full2NumberDigits}$`);
