// @flow
// Marshall Islands
// 969n{2}[-n{4}]
// possible two digits at index 3 are 60-70
import toRegexRange from "to-regex-range";

const range = toRegexRange(60, 70, {
	capture: true
});

export default new RegExp(`^969${range}(-[0-9]{4})?$`);
