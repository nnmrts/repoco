// @flow
import { type AnnotatedVariant } from "./parser/operations/unfold/variant.js";
import determineRange from "./apply-constraints/determine-range.js";
import getIndices from "./apply-constraints/get-indices.js";
import cardinalToNumber from "./apply-constraints/cardinal-to-number.js";
import unfoldRanges from "./apply-constraints/unfold-ranges.js";
import arrayReplace from "./utils/array-replace.js";

export default (
	unfolded: AnnotatedVariant[]
): $ReadOnlyArray<$ReadOnlyArray<string>> => unfolded.map(({
	pattern,
	constraints
}: AnnotatedVariant): $ReadOnlyArray<string> => {
	let realDigits = pattern;
	const excluded = [
		"(",
		")?",
		"-",
		" "
	];

	const digits = realDigits.filter((digit: string): boolean => !excluded.includes(digit));

	if (constraints.length) {
		let currentIndex = 0;

		const partitionedDigits = [];

		const constraintIndices = [];

		for (let i = 0; i < constraints.length; i++) {
			const {
				[i]: {
					position,
					amount,
					type,
					digits: rawConstraintDigits
				}
			} = constraints;

			const range = determineRange(
				position,
				digits.length,
				currentIndex,
				amount
			);

			currentIndex = range[1];

			constraintIndices.push([
				currentIndex,
				cardinalToNumber(amount)
			]);

			if (!partitionedDigits.length) {
				partitionedDigits.push(...digits);
			}

			const lookaheadSymbol = type === "excluder" ? "!" : "=";

			const constraintDigits = unfoldRanges(rawConstraintDigits);

			const lookahead = `(?${lookaheadSymbol}(${constraintDigits.join("|")}))`;

			const currentDigits = digits.slice(...range);

			if (constraintDigits[0].length === 1) {
				partitionedDigits[range[0]] = currentDigits
					.map((digit: string): string => `(${lookahead}(${digit}))`)
					.join("");
			}
			else {
				partitionedDigits[range[0]] = `(${lookahead}(${currentDigits.join("")}))`;
			}

			if (amount) {
				partitionedDigits.splice(currentIndex - 1, cardinalToNumber(amount) - 1);
			}
		}

		realDigits = partitionedDigits;

		const missingIndices = excluded.map((string: string): [string, number[]] => [
			string,
			getIndices(pattern, string).map((index: number): number => {
				let newIndex = index;

				for (let i = 0; i < constraintIndices.length; i++) {
					if (constraintIndices[i][0] <= index && constraintIndices[i][1] > 1) {
						newIndex -= 1;
					}
				}

				return newIndex;
			})
		]);

		for (let i = 0; i < missingIndices.length; i++) {
			const {
				[i]: [
					entryString,
					entryIndices
				]
			} = missingIndices;

			for (let j = 0; j < entryIndices.length; j++) {
				const {
					[j]: entryIndex
				} = entryIndices;

				realDigits = arrayReplace(
					realDigits,
					entryIndex,
					entryString,
					realDigits[entryIndex]
				);
			}
		}
	}

	return realDigits;
});
