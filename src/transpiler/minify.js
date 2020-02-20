// @flow
import {
	type PreVariants,
	type PostVariants,
	type PostVariant,
	type PostDigits,
	type Digit
} from "./types.js";
import preVariantsLevel from "./minify/pre-variants-level.js";
import preVariantLevel from "./minify/pre-variant-level.js";
import preDigitsLevel from "./minify/pre-digits-level.js";
import preDigitLevel from "./minify/pre-digit-level.js";
import postDigitsLevel from "./minify/post-digits-level.js";

export default (constraintsApplied: PreVariants): PostVariants => {
	// pre variants level

	const variants = preVariantsLevel(constraintsApplied);

	const newVariants: PostVariant[] = [];

	for (let variant of variants) {
		// pre variant level

		variant = preVariantLevel(variant);

		const newVariant: PostDigits[] = [];

		for (let digits of variant) {
			// pre digits level

			digits = preDigitsLevel(digits);

			const newDigits: Digit[] = [];

			for (let digit of digits) {
				// pre digit level

				digit = preDigitLevel(digit);

				const newDigit: Digit = digit;

				// post digit level

				newDigits.push(newDigit);
			}

			// post digits level

			const postDigits = postDigitsLevel(newDigits);

			newVariant.push(postDigits);
		}

		// post variant level

		newVariants.push(newVariant);
	}

	return newVariants;
};
