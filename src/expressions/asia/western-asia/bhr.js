// @flow
// Bahrain
// n{3}
// impossible first three digits are 000-100
// or
// n{4}
// possible first four digits are 1000-1216
import toRegexRange from "to-regex-range";

const range = toRegexRange(101, 1216, {
	capture: true
});

export default new RegExp(`^${range}$`);
