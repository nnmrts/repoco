// @flow
import { type AnnotatedVariant } from "./parser/operations/unfold/variant.js";
import determineRange from "./apply-constraints/determine-range.js";
import getIndices from "./apply-constraints/get-indices.js";
import cardinalToNumber from "./apply-constraints/cardinal-to-number.js";
import unfoldRange from "./apply-constraints/unfold-range.js";

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

		for (const constraint of constraints) {
			const {
					position,
					amount,
					type,
					digits: rawConstraintDigits
			} = constraint;

			const range = determineRange(
				position,
				digits.length,
				currentIndex,
				amount
			);

			currentIndex = range[1];

			constraintIndices.push([currentIndex, cardinalToNumber(amount)]);

			if (!partitionedDigits.length) {
				partitionedDigits.push(...digits);
			}

			const lookaheadSymbol = type === "excluder" ? "!" : "=";

			const constraintDigits = [...rawConstraintDigits]
				.map(unfoldRange)
				.flatMap((digitRange: string[]): string[] => digitRange)
				.sort((a: string, b: string): number => a.length - b.length || a.localeCompare(b));

			const lookahead = `(?${lookaheadSymbol}(${constraintDigits.join("|")}))`;

			const currentDigits = digits.slice(...range);

			if (constraintDigits.every((digit: string): boolean => digit.length === 1)) {
				partitionedDigits[range[0]] = currentDigits
					.map((digit: string): string => `(${lookahead}(${digit}))`)
					.join("");
			}
			else {
				partitionedDigits[range[0]] = `(${lookahead}(${currentDigits.join("")}))`;
			}

				partitionedDigits.splice(currentIndex - 1, cardinalToNumber(amount) - 1);
			}

		realDigits = partitionedDigits;

		const missingIndices = excluded.map((string: string): [string, number[]] => [
			string,
			getIndices(pattern, string).map((index: number): number => {
				let newIndex = index;

				for (const constraintIndex of constraintIndices) {
					if (constraintIndex[0] <= index && constraintIndex[1] > 1) {
						newIndex -= 1;
					}
				}

				return newIndex;
			})
		]);

		for (const entry of missingIndices) {
			const [entryString, entryIndices] = entry;

			for (const entryIndex of entryIndices) {
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
