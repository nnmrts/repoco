// @flow
// Afghanistan
// n{4}
// possible first two digits are 10-43
// impossible last two digits are 00

import toRegexRange from "to-regex-range";

const parts = [
	[
		10,
		43
	],
	[
		"01",
		99
	]
];

const ranges = parts.map((part: [number | string, number]): string => toRegexRange(
	part[0],
	part[1],
	{
		capture: true,
		relaxZeros: false
	}
));

export default new RegExp(`^${ranges.join("")}$`);
