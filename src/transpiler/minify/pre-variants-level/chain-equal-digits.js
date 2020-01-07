// @flow
import type { PreVariants } from "../../types.js";
import arrayChainable from "../../utils/array-chainable.js";

import findEqualDigits from "./find-equal-digits.js";

export type ChainedEqualDigits = {
	[key: number]: number[]
};

/**
 *
 *
 * @param {Digits[]} digitsArray
 * digits
 * @returns {ChainedEqualDigits}
 * chained digits
 */
export default (digitsArray: PreVariants): ChainedEqualDigits => {
	const equalDigits = findEqualDigits(digitsArray);

	const positions = Object.keys(equalDigits);

	const chainedEqualDigits = Object.fromEntries(positions.map((position: string): [
		number,
		number[]
	] => [
		Number(position),
		[]
	]));

	for (let positionIndex = 0; positionIndex < positions.length; positionIndex++) {
		const position = Number(positions[positionIndex]);
		const variantIndices = equalDigits[position];

		if (arrayChainable(variantIndices)) {
			chainedEqualDigits[position] = [];

			for (let i = 0; i < variantIndices.length; i++) {
				const variantTuple = variantIndices[i];

				for (let j = 0; j < variantTuple.length; j++) {
					if (!chainedEqualDigits[position].includes(variantTuple[j])) {
						chainedEqualDigits[position].push(variantTuple[j]);
					}
				}
			}
		}
	}

	return chainedEqualDigits;
};
