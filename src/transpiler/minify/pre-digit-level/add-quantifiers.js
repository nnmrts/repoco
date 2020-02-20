// @flow
import { type Digit } from "../../types.js";

export default (digit: Digit): Digit => {
	const regex = /(\[([0-9A-Z](-[0-9A-Z])?)+\])\1+/g;

	let newDigit = digit;

	let match;

	while ((match = regex.exec(newDigit))) {
		const amount = [...match[0].matchAll(match[1].replace("[", "\\["))].length;

		const digitsBefore = newDigit.slice(0, match.index);

		const currentDigit = match[1];

		const quantifier = `{${amount}}`;

		const digitsAfter = newDigit.slice(match.index + match[0].length);

		newDigit = `${digitsBefore}${currentDigit}${quantifier}${digitsAfter}`;
	}

	return newDigit;
};
