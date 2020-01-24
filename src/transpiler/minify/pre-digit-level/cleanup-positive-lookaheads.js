// @flow
import { type Digit } from "../../types.js";

export default (digit: Digit): Digit => {
	const regexes = [
		/\(\(\?=\(([0-9A-Z])\)\)\(\[(0-9|A-Z|A-Z0-9)\]\)\)/g,
		...Array.from(Array(8)).map((item: ?number, i: number): RegExp => new RegExp(`\\(\\?=(\\(([0-9A-Z]{${i + 2}}\\|)+[0-9A-Z]{${i + 2}}\\))\\)\\((\\[(0-9|A-Z|A-Z0-9)\\]){${i + 2}}\\)`, "g"))
	];

	let newDigit = digit;

	for (let i = 0; i < regexes.length; i++) {
		newDigit = newDigit.replace(regexes[i], "$1");
	}
	return newDigit;
};
