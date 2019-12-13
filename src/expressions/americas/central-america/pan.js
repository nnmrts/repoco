// @flow
// Panama
// n{4}
// possible first two digits are 01-10
import toRegexRange from "to-regex-range";

import full2NumberDigits from "../../../helpers/full/number/full-2-number-digits.js";

const range = toRegexRange("01", 10, {
	capture: true,
	relaxZeros: false
});

export default new RegExp(`^${range}${full2NumberDigits}$`);
