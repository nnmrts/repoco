// @flow
// Denmark
// [DK-]n{4}
// impossible first four digits are 0000-0554
import toRegexRange from "to-regex-range";

const range = toRegexRange("0555", 9999, {
	capture: true,
	relaxZeros: false
});

export default new RegExp(`^(DK-)?${range}$`);
