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
	const start = positionalToIndex(position, length, index, amount);
	const end = start + cardinalToNumber(amount);

	return [
		start,
		end
	];
};
