// @flow
import { type Positional, type Cardinal } from "../types.js";

import cardinalToNumber from "./cardinal-to-number.js";
import positionalToIndex from "./positional-to-index.js";

type Range = [number, number];

export default (
	position: Positional,
	length: number,
	index: number,
	amount: Cardinal
): Range => {
	if (cardinalToNumber(amount) > length) {
		throw new RangeError("amount is greater than length");
	}

	const start = positionalToIndex(position, length, index, amount);
	const end = start + cardinalToNumber(amount);

	if (end > length) {
		throw new RangeError("end is greater than length");
	}

	return [
		start,
		end
	];
};
