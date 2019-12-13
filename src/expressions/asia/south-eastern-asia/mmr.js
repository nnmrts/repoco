// @flow
// Myanmar
// n{5}
// possible first two digits are 01-05,07-15
// or
// n{5}
// 06111
import toRegexRange from "to-regex-range";

const ranges = [
	[
		1,
		5
	],
	[
		7,
		15
	]
].map(([
	min,
	max
]: [
	number,
	number
]): string => toRegexRange(String(min).padStart(2, "0"), String(max).padStart(2, "0"), {
	capture: true,
	relaxZeros: false
})).join("|");

export default new RegExp(`^(06111|${ranges})$`);
