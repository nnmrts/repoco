// @flow
/* eslint no-unused-vars: ["error", { "args": "none" }] */
import { Node } from "ohm-js";

export default (digitLists: Node, space: Node): string[] => digitLists.children
	.map((digitList: Node, index: number): string[] => {
		const digits = digitList.children
			.map((digit: Node): string => digit.sourceString);

		if (index === 0) {
			return digits.join("");
		}

		return digits;
	})
	.flat()
	.filter((digit: string): boolean => ![
		",",
		" "
	].includes(digit) && !(/^(\s)+$/).test(digit))
	.map((digit: string): string => digit.replace(/\t/g, ""));
