// @flow
import { type Digit } from "../../types.js";

/**
 * @example
 * @param digit
 */
export default (digit: Digit): Digit => {
	const regexes = [/\(\(\?=\(((?:[0-9A-Z])(?:\|[0-9A-Z])*)\)\)\((?:\[(0-9|A-Z|0-9A-Z)\])\)\)/g, ...Array(8).fill().map((value: void, index: number): RegExp => new RegExp(`\\(\\(\\?=(\\((?:[0-9A-Z]{${index + 2}})(?:\\|[0-9A-Z]{${index + 2}})*\\))\\)\\((?:\\[(0-9|A-Z|0-9A-Z)\\]){${index + 2}}\\)\\)`, "g"))];

	let newDigit = digit;

	for (const regex of regexes) {
		newDigit = `(${newDigit.replace(regex, "$1")})`;
	}

	return newDigit;
};
