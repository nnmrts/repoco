// @flow
// Mexico
// n{5}
// impossible first two digits are 17-19
import toRegexRange from "to-regex-range";

const range = toRegexRange("00", 99, {
	capture: true,
	relaxZeros: false
});

export default new RegExp(`^(?!1[7-9])${range}[0-9]{3}$`);
