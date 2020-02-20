// @flow
import { type PreVariants } from "../../types.js";
import arrayChainable from "../../utils/array/chainable.js";

import findEqualDigits from "./find-equal-digits.js";

export type ChainedEqualDigits = {
	[key: number]: number[]
};

/**
 * @param {Digits[]} digitsArray -
 * digits.
 * @returns {ChainedEqualDigits}
 * chained digits.
 * @example
 */
export default (digitsArray: PreVariants): ChainedEqualDigits => {
	const equalDigits = findEqualDigits(digitsArray);

	const positions = Object.keys(equalDigits);

	const chainedEqualDigits = Object.fromEntries(positions.map((position: string): [
		number,
		number[]
	] => [Number(position), []]));

	for (const position of positions) {
		const positionNumber = Number(position);
		const variantIndices = equalDigits[positionNumber];

		if (arrayChainable(variantIndices)) {
			chainedEqualDigits[positionNumber] = [];

			for (const variantTuple of variantIndices) {
				for (const tupleMember of variantTuple) {
					if (!chainedEqualDigits[positionNumber].includes(tupleMember)) {
						chainedEqualDigits[positionNumber].push(tupleMember);
					}
				}
			}
		}
	}

	return chainedEqualDigits;
};
