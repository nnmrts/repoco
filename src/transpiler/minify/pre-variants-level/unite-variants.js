// @flow
import arrayUnite from "../../utils/array-unite.js";
import {
	type PreVariants,
	type PostVariants,
	type PostVariant,
	type PreDigits,
	type PostDigits
} from "../../types.js";
import arrayDecast from "../../utils/array-decast.js";
import arrayCast from "../../utils/array-cast.js";

import { type ChainedEqualDigits } from "./chain-equal-digits.js";

/**
 *
 *
 * @param {Digits[]} digits
 * digits
 * @param {ChainedEqualDigits} chainedEqualDigits
 * chained digits
 * @returns {Digits[]}
 * united digits
 */
export default (
	digits: PreVariants,
	chainedEqualDigits: ChainedEqualDigits
): PostVariants => {
	const newVariants: PostVariant[] = [];

	const equalPositions = Object.keys(chainedEqualDigits);

	let variantIndicesWithEqualDigits = [];

	for (const position of equalPositions) {
		const positionNumber = Number(position);
		const variants = chainedEqualDigits[positionNumber]
			.map((index: number): PreDigits => digits[index]);

		variantIndicesWithEqualDigits.push(...chainedEqualDigits[positionNumber]);

		const united = arrayUnite(positionNumber, ...variants);

		const unitedDigits: PostVariant = united
			.map((digit: PostDigits): PostDigits => {
				const set = new Set(arrayCast(digit));

				const array = [...set];

				return arrayDecast(array);
			});

		newVariants.push(unitedDigits);
	}

	variantIndicesWithEqualDigits = [...new Set(variantIndicesWithEqualDigits)].sort();

	const missingVariants = [];

	for (const [i, digit] of digits.entries()) {
		if (!variantIndicesWithEqualDigits.includes(i)) {
			missingVariants.push(digit);
		}
	}

	return [
		...missingVariants,
		[
			...new Set(
				...newVariants
					.map(
						(variant: PostVariant): $ReadOnlyArray<[
						number,
						PostDigits
					]> => variant
							.map(
								(digit: PostDigits, index: number): [
									number,
									PostDigits
								] => [
									index,
									digit
								]
							)
					)
			)
		].map((entry: [
			number,
			PostDigits
		]): PostDigits => entry[1])
	].filter((variant: PostVariant): boolean => !!variant.length);
};
