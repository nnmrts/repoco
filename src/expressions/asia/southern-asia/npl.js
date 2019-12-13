// @flow
// Nepal
// n{5}
// possible first two digits are 10-57
import toRegexRange from "to-regex-range";

const range = toRegexRange(10, 57, {
	capture: true
});

export default new RegExp(`^${range}$`);
