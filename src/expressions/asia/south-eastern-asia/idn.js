// @flow
// Indonesia
// n{5}
// impossible first two digits are 00-09,88,89
import toRegexRange from "to-regex-range";

const range = toRegexRange(10, 99, {
	capture: true
});

export default new RegExp(`^(?!(88|89))${range}[0-9]{3}$`);
