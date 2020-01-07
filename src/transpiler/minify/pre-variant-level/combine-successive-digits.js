// @flow
import type { PostVariant } from "../../types.js";

export default (variant: PostVariant): PostVariant => {
	const combinedVariant = [];

	let currentChunk = [];

	for (let i = 0; i < variant.length; i++) {
		currentChunk.push(variant[i]);

		if (variant[i + 1] !== variant[i]) {
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
