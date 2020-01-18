// @flow
import cardinalToNumber from "./cardinal-to-number.js";

/**
 *
 *
 * @param {string} position
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
export default (position: string, length: number, index: number, amount: ?string = "one"): number => {
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
