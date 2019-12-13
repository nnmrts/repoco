// @flow
// Montenegro
// n{5}
// possible first five digits are 81000-85368
import toRegexRange from "to-regex-range";

const range = toRegexRange(81000, 85368, {
	capture: true
});

export default new RegExp(`^${range}$`);
