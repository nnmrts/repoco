// @flow
/* eslint no-unused-vars: ["error", { "args": "none" }] */
import { Node } from "ohm-js";

import { type AnnotatedVariant } from "./variant.js";

/**
 * @example
 * @param variants
 */
export default (variants: Node): AnnotatedVariant[] => {
	const newVariants = variants.children[0].children
		.map((variant: Node): AnnotatedVariant => variant.unfold())
		.flat()
		.filter((variant: AnnotatedVariant | "or"): boolean => variant !== "or")
		.map((variant: AnnotatedVariant): AnnotatedVariant => {
			const {
				pattern,
				constraints
			} = variant;

			let newPattern = pattern;
			let added = 0;

			for (const [i, token] of pattern.entries()) {
				if (Array.isArray(token)) {
					newPattern = [
						...newPattern.slice(0, i + added),
						"(",
						...token,
						")?",
						...newPattern.slice(i + 1 + added)
					];

					added += 2;
				}
			}
			return {
				pattern: newPattern,
				constraints
			};
		});

	return newVariants;
};
