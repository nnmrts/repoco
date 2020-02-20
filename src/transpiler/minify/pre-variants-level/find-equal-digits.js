// @flow
import { type PreVariants, type PreDigits } from "../../types.js";

export type EqualDigits = {
	[key: number]: $ReadOnlyArray<[number, number]>
};

/**
 *
 *
 * @param {Digits[]} digitsArray
 * digits
 * @returns {$ReadOnlyArray<[number, [number, number]]>}
 * all the equal digits
 */
export default (digitsArray: PreVariants): EqualDigits => {
	const lengthMax = Math.max(...digitsArray.map((digits: PreDigits): number => digits.length));

	const equalDigits = {};

	for (let lengthIndex = 0; lengthIndex < lengthMax; lengthIndex++) {
		const arraysWithLength = [];
		const originalIndices = [];

		for (const [i, digits] of variants.entries()) {
			if (digits.length === lengthIndex) {
				arraysWithLength.push(digits);
				originalIndices.push(i);
			}
		}

		for (const [sameLengthIndex, digits] of arraysWithLength.entries()) {
			const digitsBefore = arraysWithLength[sameLengthIndex - 1];

			for (let i = 0; i < lengthIndex; i++) {
				const digit = digits[i];

				if (digitsBefore) {
					const digitBefore = digitsBefore[i];

					if (digit === digitBefore) {
						if (!equalDigits[i]) {
							equalDigits[i] = [];
						}

						equalDigits[i].push(
							[originalIndices[sameLengthIndex - 1], originalIndices[sameLengthIndex]]
						);
					}
				}
			}
		}
	}

	return equalDigits;
};
