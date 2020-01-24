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

	for (let digitsIndex = 0; digitsIndex < variants.length; digitsIndex++) {
		// pre variant level

		const variant = preVariantLevel(variants[digitsIndex]);

		const newVariant: PostDigits[] = [];

		for (let digitIndex = 0; digitIndex < variant.length; digitIndex++) {
			// pre digits level

			const digits = preDigitsLevel(variant[digitIndex]);

			const newDigits: Digit[] = [];

			for (let i = 0; i < digits.length; i++) {
				// pre digit level

				const digit = preDigitLevel(digits[i]);

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
