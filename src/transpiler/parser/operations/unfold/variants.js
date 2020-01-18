// @flow
/* eslint no-unused-vars: ["error", { "args": "none" }] */
import { Node } from "ohm-js";

import { type AnnotatedVariant } from "./variant.js";

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

			for (let i = 0; i < pattern.length; i++) {
				if (Array.isArray(pattern[i])) {
					newPattern = [
						...newPattern.slice(0, i + added),
						"(",
						...pattern[i],
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
