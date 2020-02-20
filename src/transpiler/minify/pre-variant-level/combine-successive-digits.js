// @flow
import { type PostVariant } from "../../types.js";

/**
 * @example
 * @param variant
 */
export default (variant: PostVariant): PostVariant => {
	const combinedVariant = [];

	let currentChunk = [];

	for (const [i, digits] of variant.entries()) {
		currentChunk.push(digits);

		if (variant[i + 1] !== digits) {
			if (!Array.isArray(currentChunk[0])) {
				currentChunk = currentChunk.join("");
			}
			else {
				currentChunk = currentChunk[0];
			}
			combinedVariant.push(currentChunk);

			currentChunk = [];
		}
	}

	return combinedVariant;
};
