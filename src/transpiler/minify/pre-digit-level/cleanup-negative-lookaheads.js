// @flow
import type { Digit } from "../../types.js";

export default (digit: Digit): Digit => {
	const regex = /^\(\(\?!\(([0-9A-Z])\)\)\(\[(0-9|A-Z|0-9A-Z|A-Z0-9)\]\)\)$/;

	const impossible = digit.replace(regex, "$1");

	if (impossible !== digit) {
		if (!Number.isNaN(Number(impossible))) {
			return `(${
				Array
					.from(Array(10)).map((item: empty, i: number): number => i)
					.filter((number: number): boolean => number !== Number(impossible))
					.join("|")
			})`;
		}
		// ALPHANUMERIC
	}
	else {
		return digit;
	}
};
