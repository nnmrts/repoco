// @flow
// Italy
// n{5}
// possible first three digits are 001-981
import toRegexRange from "to-regex-range";

import full2NumberDigits from "../../../helpers/full/number/full-2-number-digits.js";

const range = toRegexRange("001", 981, {
	capture: true,
	relaxZeros: false
});

export default new RegExp(`^${range}${full2NumberDigits}$`);
