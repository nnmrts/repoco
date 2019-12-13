// @flow
// Armenia
// n{4}
// possible first two digits are 00,02-42
import toRegexRange from "to-regex-range";

const range = toRegexRange("00", "42", {
	capture: true,
	relaxZeros: false
});

export default new RegExp(`^((?!01)${range})[0-9]{2}$`);
