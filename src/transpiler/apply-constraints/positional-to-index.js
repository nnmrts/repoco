// @flow
import { type Positional, type Cardinal } from "../types.js";

import cardinalToNumber from "./cardinal-to-number.js";

/**
 * @param {Positional} position -
 * position.
 * @param {number} length -
 * length.
 * @param {number} index -
 * index.
 * @param {?string} [amount] -
 * amount.
 * @returns {number}
 * index.
 * @example
 */
export default (position: Positional, length: number, index: number, amount: Cardinal): number => {
	if (cardinalToNumber(amount) > length) {
		throw new RangeError("amount is greater than length");
	}

	let result;

	if (position === "last") {
		result = length - cardinalToNumber(amount);
	}
	else if (position === "next") {
		result = index;
	}
	else {
		result = [
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
	}

	if (result >= length) {
		throw new RangeError("position is equal to or greater than length");
	}

	return result;
};
