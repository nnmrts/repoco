// @flow
import findCommonPrefix from "./assemble/find-common-prefix.js";
import reverseString from "./assemble/reverse-string.js";
import type { PostVariants, PostDigits } from "./types.js";

export default (variants: PostVariants): RegExp => {
	const newVariants = [];

	for (let i = 0; i < variants.length; i++) {
		const variant = variants[i];

		if (variant.filter((digits: PostDigits): boolean => Array.isArray(digits)).length !== 0) {
			const firstArrayInVariant = variant.filter((digits: PostDigits): boolean => Array.isArray(digits))[0];

			for (let j = 0; j < firstArrayInVariant.length; j++) {
				const transposedVariant = variant.map((row: PostDigits): string => {
					if (Array.isArray(row)) {
						return row[j];
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

	if (commonPrefix.match(/\(|\)/)) {
		commonPrefix = "";
	}
	if (commonSuffix.match(/\(|\)/)) {
		commonSuffix = "";
	}

	return new RegExp(`^${[
		commonPrefix,
		`(${newVariants.map((variant: string): string => variant.replace(commonPrefix, "").replace(commonSuffix, "")).join("|")})`,
		commonSuffix
	]
		.join("")
		.replace(/\((\(\?!([[\]|\-0-9A-Z ])+\)\([[\]|\-{}()0-9A-Z ]+\))\)/g, "$1")
		.replace(/^\(([^|]*?)\)$/, "$1")
		.replace(/\(\?(=|!)((?:(?:[0-9]|\[(?:[0-9](?:-?[0-9]+)?)+\]){2}\|)+(?:[0-9]|\[(?:[0-9](?:-?[0-9]+)?)+\]){2})\)\((\[0-9\]\{2\})\)/g, "(?$1$2)$3")
	}$`);
};
