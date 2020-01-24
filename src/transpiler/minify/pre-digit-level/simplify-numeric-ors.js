// @flow
import toRegexRange from "to-regex-range";

import arrayUnique from "../../utils/array-unique.js";
import { type Digit } from "../../types.js";

export default (digit: Digit): Digit => {
	const regex = /\((([0-9]+)\|*)+\)/g;

	let newDigit = digit;

	const matches = newDigit.match(regex);

	if (matches) {
		for (let matchIndex = 0; matchIndex < matches.length; matchIndex++) {
			const realMatch = matches[matchIndex];
			const match = realMatch.split(/\(|\||\)/).slice(1, -1);

			const digitLength = match[0].length;

			const numbers = match.map((string: string): number => Number(string));

			const ranges = [];

			let currentRange = [];

			for (let numberIndex = 0; numberIndex < numbers.length; numberIndex++) {
				const currentNumber = numbers[numberIndex];
				const nextNumber = numbers[numberIndex + 1];

				currentRange.push(currentNumber);

				if (!nextNumber || nextNumber !== currentNumber + 1) {
					ranges.push(currentRange);
					currentRange = [];
				}
			}

			const safeRanges = [];

			for (let i = 0; i < ranges.length; i++) {
				const range = ranges[i];

				if (range.length === 2) {
					for (let j = 0; j < range.length; j++) {
						const number = range[j];
						safeRanges.push([
							number
						]);
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
					for (let i = 0; i < successiveNumbers.length; i++) {
						const currentMatch = successiveNumbers[i];
						simplified = simplified.replace(currentMatch[0], currentMatch[1]);
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
							const digitsOnIndex = splitUpRanges.map((range: string[]): string => range[i]);

							compactVariant[i] = [];

							for (let j = 0; j < digitsOnIndex.length; j++) {
								if (
									splitUpRanges[j][smallestVarianceIndex] === variant
								) {
									if (Array.isArray(compactVariant[i])) {
										compactVariant[i].push(digitsOnIndex[j]);
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
