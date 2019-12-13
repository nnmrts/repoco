// @flow
// United States Virgin Islands|Virgin Islands (U.S.)
// 008n{2}
// possible last two digits are 01-51
import toRegexRange from "to-regex-range";

const range = toRegexRange(801, 851, {
	capture: true
});

export default new RegExp(`^00${range}$`);
