// @flow
// Armenia
// n{4}
// possible first two digits are 00,02-42
import toRegexRange from "to-regex-range";

import full2NumberDigits from "../../../helpers/full/number/full-2-number-digits.js";

const range = toRegexRange("00", "42", {
	capture: true,
	relaxZeros: false
});

export default new RegExp(`^((?!01)${range})${full2NumberDigits}$`);
