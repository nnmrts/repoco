// @flow
import rangePossible from "../../../../src/transpiler/utils/range/possible.js";
import arrayUnique from "../../../../src/transpiler/utils/array/unique.js";

const digitsLength = 15;

const numberExponent = 3;

const testNumberDigits = Array(digitsLength)
	.fill()
	.map((value: void, index: number): string => String((index + 1) ** numberExponent));

const maxCharacterLength = 3;

const characterExponent = 2;

const asciiAPosition = 65;

const characterShiftFactor = 3;

const characterShiftDivisor = 2;

const testCharacterDigits = Array(maxCharacterLength)
	.fill()
	.map(
		(value: void, repeatIndex: number): string[] => Array(digitsLength / maxCharacterLength)
			.fill()
			.map(
				(innerValue: void, index: number): string => String
					.fromCharCode(((index + 1) ** characterExponent) + asciiAPosition - 1)
					.repeat(repeatIndex + 1)
					.split("")
					.map(
						(string: string, innerIndex: number): string => String
							.fromCharCode(
								string.charCodeAt(0) -
								(
									(characterShiftFactor * innerIndex * index) /
									characterShiftDivisor
								)
							)
					)
					.join("")
			)
	)
	.flatMap((digits: string[]): string[] => digits);

const alphanumericExponent = 4.2;

const alphanumericRadix = 36;

const testAlphaNumericDigits = Array(digitsLength)
	.fill()
	.map((value: void, index: number): string => Math.floor((index) ** alphanumericExponent)
		.toString(alphanumericRadix)
		.toLocaleUpperCase());

const variables = {
	number: {
		testDigits: testNumberDigits,
		pattern: "[0-9]",
		pad: "0"
	},
	character: {
		testDigits: testCharacterDigits,
		pattern: "[A-Z]",
		pad: null
	},
	alphanumeric: {
		testDigits: testAlphaNumericDigits,
		pattern: "[0-9A-Z]",
		pad: null
	}
};

const data = {};

for (const tokenType in variables) {
	const {
		testDigits,
		pattern,
		pad
	} = variables[tokenType];

	const simpleExpanded = testDigits
		.map(
			(digit: string, index: number, array: string[]): string[] => array.slice(0, index + 1)
		);

	const separator = "-";

	const complexExpanded = testDigits
		.map(
			(digit: string, index: number, array: string[]): string[] => array
				.slice(0, index + 1)
				.join(separator)
				.replace(new RegExp(`(${separator}${pattern}+)${separator}(${pattern}+)`, "g"), "$1,$2")
				.split(",")
		);

	const simpleSingle = (
		simpleExpanded
			.filter(
				(digits: string[]): boolean => !digits
					.some((digit: string): boolean => digit.length !== 1)
			): string[][]
	);

	const singleRangeStringLength = `0${separator}9`.length;

	const complexSingle = (
		complexExpanded
			.filter(
				(digits: string[]): boolean => digits
					.every(
						(digit: string): boolean => digit.length === 1 ||
							digit.length === singleRangeStringLength
					)
			): string[][]
	);

	const simpleVariant = (
		simpleExpanded
			.filter(
				(digits: string[]): boolean => !digits
					.every((digit: string): boolean => digit.length === 1)
			): string[][]
	);

	const complexVariant = (
		complexExpanded
			.filter(
				(digits: string[]): boolean => !digits
					.every(
						(digit: string): boolean => digit.length === 1 ||
							digit.length === singleRangeStringLength
					)
			): string[][]
	);

	const multipleStartLength = 2;

	/**
	 * Filters out ranges with variable digit lengths and zero pads them.
	 *
	 * @param variantDigits - Digits.
	 * @param index - Index.
	 * @param complex - If its complex.
	 * @returns Digits.
	 * @example
	 */
	const multiplicator = (
		variantDigits: string[][],
		index: number,
		complex?: boolean = false
	): string[][] => variantDigits
		.filter(
			(digits: string[]): boolean => !digits
				.some(
					(digit: string): boolean => (
						complex ?
							digit.length > (index * 2) + `00${separator}99`.length ||
								(
									digit.length === (index * 2) + singleRangeStringLength &&
									!digit.match("-")
								) :
							digit.length > index + multipleStartLength
					)
				)
		)
		.map(
			(digits: string[]): string[] => digits
				.map((digit: string): string => digit
					.split("-")
					.map(
						(innerDigit: string): string => innerDigit
							.padStart(index + multipleStartLength, pad || innerDigit)
					)
					.join("-"))
				.filter(rangePossible)
		);

	const digitLength = 3;

	const simpleMultiple = (
		Array(digitLength - 1)
			.fill()
			.map(
				(value: void, index: number): string[][] => multiplicator(simpleVariant, index)
			)
			.flatMap((digits: string[][]): string[][] => digits): string[][]
	);

	const complexMultiple = (
		Array(digitLength - 1)
			.fill()
			.map(
				(
					value: void,
					index: number
				): string[][] => multiplicator(complexVariant, index, true)
			)
			.flatMap((digits: string[][]): string[][] => digits): string[][]
	);

	const rangeSingle = (
		arrayUnique(
			complexSingle
				.filter(
					(digits: string[]): boolean => digits
						.every((digit: string): boolean => !!digit.match("-"))
				)
				.flatMap((digits: string[]): string[] => digits)
		): $ReadOnlyArray<string>
	);

	const rangeVariant = (
		arrayUnique(
			complexVariant
				.filter(
					(digits: string[]): boolean => digits
						.every((digit: string): boolean => !!digit.match("-"))
				)
				.flatMap((digits: string[]): string[] => digits)
		): $ReadOnlyArray<string>
	);

	const rangeMultiple = (
		arrayUnique(
			complexMultiple
				.filter(
					(digits: string[]): boolean => digits
						.every((digit: string): boolean => !!digit.match("-"))
				)
				.flatMap((digits: string[]): string[] => digits)
		): $ReadOnlyArray<string>
	);

	data[tokenType] = {
		simple: {
			single: simpleSingle,
			variant: simpleVariant,
			multiple: simpleMultiple
		},
		complex: {
			single: complexSingle,
			variant: complexVariant,
			multiple: complexMultiple
		},
		range: {
			single: rangeSingle,
			variant: rangeVariant,
			multiple: rangeMultiple
		}
	};
}

export const numberSimpleData = data.number.simple;
export const numberComplexData = data.number.complex;
export const numberRangeData = data.number.range;
export const characterSimpleData = data.character.simple;
export const characterComplexData = data.character.complex;
export const characterRangeData = data.character.range;
export const alphanumericSimpleData = data.alphanumeric.simple;
export const alphanumericComplexData = data.alphanumeric.complex;
export const alphanumericRangeData = data.alphanumeric.range;
