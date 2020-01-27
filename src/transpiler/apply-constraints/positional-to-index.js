// @flow
import { type Positional, type Cardinal } from "../types.js";

import cardinalToNumber from "./cardinal-to-number.js";

/**
 *
 *
 * @param {Positional} position
 * position
 * @param {number} length
 * length
 * @param {number} index
 * index
 * @param {?string} [amount="one"]
 * amount
 * @returns {number}
 * index
 */
export default (position: Positional, length: number, index: number, amount: Cardinal): number => {
	if (position === "last") {
		return length - cardinalToNumber(amount) - 1;
	}
	if (position === "next") {
		return index;
	}

	return [
		"first",
		"second",
		"third",
		"fourth",
		"fifth",
		"sixth",
		"seventh",
		"eigth",
		"ninth"
	].indexOf(position);
};
