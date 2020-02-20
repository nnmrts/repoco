// @flow
import findCommonPrefix from "./assemble/find-common-prefix.js";
import reverseString from "./assemble/reverse-string.js";
import { type PostVariants, type PostDigits } from "./types.js";

/**
 * @example
 * @param variants
 */
export default (variants: PostVariants): RegExp => {
	const newVariants = [];

	for (const variant of variants) {
		if (variant.filter((digits: PostDigits): boolean => Array.isArray(digits)).length !== 0) {
			const firstArrayInVariant = variant.filter((digits: PostDigits): boolean => Array.isArray(digits))[0];

			const length = firstArrayInVariant.length;

			for (let i = 0; i < length; i++) {
				const transposedVariant = variant.map((row: PostDigits): string => {
					if (Array.isArray(row)) {
						return row[i];
					}
					return row;
				}).join("");

				newVariants.push(transposedVariant);
			}
		}
		else {
			newVariants.push(variant.join(""));
		}
	}

	let commonPrefix = newVariants.length === 1 ? "" : findCommonPrefix(newVariants);
	let commonSuffix = newVariants.length === 1 ? "" : reverseString(findCommonPrefix(newVariants.map(reverseString)));

	// TODO: allow if number of parentheses is even
	if (commonPrefix.match(/\(|\)|\[|\]|\{|\}/)) {
		commonPrefix = "";
	}
	if (commonSuffix.match(/\(|\)|\[|\]|\{|\}/)) {
		commonSuffix = "";
	}

	const assembledVariants = [
		commonPrefix + (newVariants.length > 1 ? "(" : ""),
		`${
			newVariants
				.map((variant: string): string => variant
					.replace(commonPrefix, "")
					.replace(commonSuffix, ""))
				.join("|")
		}`,
		(newVariants.length > 1 ? ")" : "") + commonSuffix
	]
		.join("")
		.replace(/\((\(\?!([[\]|\-0-9A-Z ])+\)\([[\]|\-{}()0-9A-Z ]+\))\)/g, "$1")
		.replace(/^\((?!(?:(?:.*?)(?:\)\(|\|)(?:.*?)))(.*?)\)$/, "$1")
		.replace(/\(\?(=|!)((?:(?:[0-9]|\[(?:[0-9](?:-?[0-9]+)?)+\]){2}\|)+(?:[0-9]|\[(?:[0-9](?:-?[0-9]+)?)+\]){2})\)\((\[0-9\]\{2\})\)/g, "(?$1$2)$3");

	return new RegExp(`^${assembledVariants}$`);
};
