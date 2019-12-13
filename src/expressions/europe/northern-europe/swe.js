// @flow
// Sweden
// n{3} n{2}
// possible first three digits are 100-984
import toRegexRange from "to-regex-range";

import full2NumberDigits from "../../../helpers/full/number/full-2-number-digits.js";

const range = toRegexRange(100, 984, {
	capture: true
});

export default new RegExp(`^${range} ${full2NumberDigits}$`);
