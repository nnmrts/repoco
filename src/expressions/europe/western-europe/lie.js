// @flow
// Liechtenstein
// 94n{2}
// possible last two digits are 85-98
import toRegexRange from "to-regex-range";

const range = toRegexRange(85, 98, {
	capture: true
});

export default new RegExp(`^${range}$`);
