// @flow
import toRegexRange from "to-regex-range";

import arrayUnique from "../../utils/array/unique.js";
import { type Digit } from "../../types.js";

/**
 * @example
 * @param digit
 */
export default (digit: Digit): Digit => {
	const regex = /\((([0-9]+)\|*)+\)/g;

	let newDigit = digit;

	const matches = newDigit.match(regex);

	if (matches) {
		for (const realMatch of matches) {
			const match = realMatch.split(/\(|\||\)/).slice(1, -1);

			const digitLength = match[0].length;

			const numbers = match.map((string: string): number => Number(string));

			const ranges = [];

			let currentRange = [];

			for (const [i, currentNumber] of numbers.entries()) {
				const nextNumber = numbers[i + 1];

				currentRange.push(currentNumber);

				if (!nextNumber || nextNumber !== currentNumber + 1) {
					ranges.push(currentRange);
					currentRange = [];
				}
			}

			const safeRanges = [];

			for (const range of ranges) {
				if (range.length === 2) {
					for (const number of range) {
						safeRanges.push([number]);
					}
				}
				else {
					safeRanges.push(range);
				}
			}

			const splitUpRanges = safeRanges.map((range: number[]): string => {
				const min = String(range[0]).padStart(digitLength, "0");
				const max = String(range[range.length - 1]).padStart(digitLength, "0");

				const regexRange = toRegexRange(min, max, {
					capture: true,
					relaxZeros: false
				});

				let simplified = regexRange.replace(/([0-9])(\[0-9\])\|(\[?([0-9](-?[0-9]+)?)\]?)\2/g, "[$1$4]$2");

				const successiveNumberRegex = /\[(.*?)([0-9]{2})-(.*?)\]/g;

				const successiveNumberMatches = simplified.match(successiveNumberRegex);

				const successiveNumbers = successiveNumberMatches
					?.map((rangeString: string): [string, string] => [
						rangeString,
						`[${rangeString
							.slice(1, -1)
							.split(/|\|/)
							.filter((string: string, index: number): boolean => index !== 1)
							.join("")}]`
					]);

				if (successiveNumbers) {
					for (const succesiveNumber of successiveNumbers) {
						simplified = simplified.replace(succesiveNumber[0], succesiveNumber[1]);
					}
				}

				return simplified.replace(/^\((.*?)\)$/, "$1");
			}).map((option: string): string[] => {
				const splitUp = [];
				let tempOption = option;

				for (let i = 0; i < digitLength; i++) {
					const currentDigit = tempOption.match(/^([0-9]|\[([0-9](-?[0-9]+)?)+\])/)?.[0];
					splitUp.push(currentDigit || "");
					tempOption = tempOption.slice(currentDigit?.length);
				}

				return splitUp;
			});

			let compactSplitUpRanges;

			if (digitLength > 1) {
				let smallestVarianceIndex = 0;
				let variants = [];
				let variantsLength = Infinity;

				for (let i = 0; i < digitLength; i++) {
					const digitsOnIndex = splitUpRanges.map((range: string[]): string => range[i]);

					const currentVariants = arrayUnique(digitsOnIndex);
					if (currentVariants.length < variantsLength) {
						variants = currentVariants;
						variantsLength = variants.length;
						smallestVarianceIndex = i;
					}
				}

				compactSplitUpRanges = variants.map((variant: string): (string | string[]) => {
					const compactVariant = [];
					for (let i = 0; i < digitLength; i++) {
						if (i !== smallestVarianceIndex) {
							const digitsOnIndex = splitUpRanges.map(
								(range: string[]): string => range[i]
							);

							compactVariant[i] = [];

							for (const [j, digitOnIndex] of digitsOnIndex.entries()) {
								if (
									splitUpRanges[j][smallestVarianceIndex] === variant
								) {
									if (Array.isArray(compactVariant[i])) {
										compactVariant[i].push(digitOnIndex);
									}
								}
							}

							if (Array.isArray(compactVariant[i]) && compactVariant[i].length > 1) {
								compactVariant[i] = `[${compactVariant[i].map((option: string): string => {
									if (option.match(/\[/)) {
										return option.slice(1, -1);
									}

									return option;
								}).join("")}]`;
							}
							else {
								compactVariant[i] = compactVariant[i][0];
							}
						}
					}

					compactVariant[smallestVarianceIndex] = variant;

					return compactVariant.join("");
				});
			}

			const regexRanges = (compactSplitUpRanges || splitUpRanges).join("|");

			newDigit = newDigit.replace(realMatch, regexRanges);
		}
	}

	return newDigit;
};
