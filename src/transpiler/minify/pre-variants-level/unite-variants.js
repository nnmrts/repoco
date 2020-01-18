// @flow
import arrayUnite from "../../utils/array-unite.js";
import type {
	PreVariants,
	PostVariants,
	PostVariant,
	PreDigits,
	PostDigits
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

	for (let i = 0; i < equalPositions.length; i++) {
		const position = Number(equalPositions[i]);
		const variants = chainedEqualDigits[Number(position)]
			.map((index: number): PreDigits => digits[index]);

		variantIndicesWithEqualDigits.push(...chainedEqualDigits[Number(position)]);

		const united = arrayUnite(position, ...variants);

		const unitedDigits: PostVariant = united
			.map((digit: PostDigits): PostDigits => {
				const set = new Set(arrayCast(digit));

				const array = [
					...set
				];

				return arrayDecast(array);
			});

		newVariants.push(unitedDigits);
	}

	variantIndicesWithEqualDigits = [
		...new Set(variantIndicesWithEqualDigits)
	].sort();

	const missingVariants = [];

	for (let i = 0; i < digits.length; i++) {
		if (!variantIndicesWithEqualDigits.includes(i)) {
			missingVariants.push(digits[i]);
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
