// @flow
import type { Digit } from "../../types.js";

export default (digit: Digit): Digit => {
	const regex = /((\[(([0-9A-Z]+-?)+)\])+)(?=\2)/g;

	const matches = ((digit || "").match(regex) || []).length;

	let newDigit = digit;

	for (let i = 0; i < matches; i++) {
		const match = regex.exec(newDigit);

		if (match) {
			const amount = match[0].split(/(?=\[)/).concat(match[2]).length;

			newDigit = `${newDigit.slice(0, match.index)}${match[2]}{${amount}}${newDigit.slice(match.index + match[0].length + match[2].length)}`;
		}
	}

	return newDigit;
};
