// @flow
// Guam
// 969n{2}[-n{4}]
// possible two digits at index 3 are 10-32
import toRegexRange from "to-regex-range";

const range = toRegexRange(10, 32, {
	capture: true
});

export default new RegExp(`^969${range}(-[0-9]{4})?$`);
