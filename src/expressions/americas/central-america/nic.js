// @flow
// Nicaragua
// n{5}
// possible first five digits are 10000-92599
import toRegexRange from "to-regex-range";

const range = toRegexRange(10000, 92599, {
	capture: true
});

export default new RegExp(`^${range}$`);
