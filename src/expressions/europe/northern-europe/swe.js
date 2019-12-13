// @flow
// Sweden
// n{3} n{2}
// possible first three digits are 100-984
import toRegexRange from "to-regex-range";

const range = toRegexRange(100, 984, {
	capture: true
});

export default new RegExp(`^${range} [0-9]{2}$`);
