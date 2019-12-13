// @flow
// Jamaica
// [n]
// possible first digits are 1-9
// or
// [n{2}]
// possible first two digits are 10-20
import toRegexRange from "to-regex-range";

const range = toRegexRange(1, 20, {
	capture: true
});

export default new RegExp(`(^$|^${range}$)`);
