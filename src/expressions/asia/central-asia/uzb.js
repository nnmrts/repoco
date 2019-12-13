// @flow
// Uzbekistan
// n{6}
// possible first two digits are 10-23
import toRegexRange from "to-regex-range";

const range = toRegexRange(10, 23, {
	capture: true
});

export default new RegExp(`^${range}$`);
