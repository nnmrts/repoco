// @flow
import test, { type TestInterface } from "ava";

import unfoldRanges from "../../../src/transpiler/apply-constraints/unfold-ranges.js";

const testNumbers = Array(15).fill().map((value: void, index: number): number => (index + 1) ** 3);

const testDigits = testNumbers.map(String);

const simpleExpandedNumberDigits = testDigits
	.map((digit: string, index: number, array: string[]): string[] => array.slice(0, index + 1));

const simpleSingleNumberDigits = simpleExpandedNumberDigits
	.filter(
		(digits: string[]): boolean => !digits.some((digit: string): boolean => digit.length !== 1)
	);

test("simple single number digits are not changed", (t: TestInterface) => {
	for (let i = 0; i < simpleSingleNumberDigits.length; i++) {
		t.deepEqual(unfoldRanges(simpleSingleNumberDigits[i]), simpleSingleNumberDigits[i]);
	}
});

const simpleVariantNumberDigits = simpleExpandedNumberDigits
	.filter(
		(digits: string[]): boolean => !digits.every((digit: string): boolean => digit.length === 1)
	);

test("simple variant number digits are not changed", (t: TestInterface) => {
	for (let i = 0; i < simpleVariantNumberDigits.length; i++) {
		t.deepEqual(unfoldRanges(simpleVariantNumberDigits[i]), simpleVariantNumberDigits[i]);
	}
});

const simpleMultiNumberDigits = Array(3)
	.fill()
	.map(
		(value: void, index: number): string[][] => simpleVariantNumberDigits
			.filter(
				(digits: string[]): boolean => !digits
					.some((digit: string): boolean => digit.length > index + 2)
			)
			.map(
				(digits: string[]): string[] => digits
					.map((digit: string): string => digit.padStart(index + 2, "0"))
			)
	);

test("simple multi number digits are not changed", (t: TestInterface) => {
	for (let i = 0; i < simpleMultiNumberDigits.length; i++) {
		for (let j = 0; j < simpleMultiNumberDigits[i].length; j++) {
			t.deepEqual(unfoldRanges(simpleMultiNumberDigits[i][j]), simpleMultiNumberDigits[i][j]);
		}
	}
});

const complexExpandedNumberDigits = testDigits
	.map(
		(digit: string, index: number, array: string[]): string[] => array
			.slice(0, index + 1)
			.join("-")
			.replace(/(-[0-9]+)-([0-9]+)/g, "$1,$2")
			.split(",")
	);

const complexSingleNumberDigits = complexExpandedNumberDigits
	.filter(
		(digits: string[]): boolean => digits
			.every((digit: string): boolean => digit.length === 1 || digit.length === 3)
	);

test("complex single number digits have no hyphens", (t: TestInterface) => {
	for (let i = 0; i < complexSingleNumberDigits.length; i++) {
		t.true(
			unfoldRanges(complexSingleNumberDigits[i])
				.every((digit: string): boolean => !digit.match("-"))
		);
	}
});

test("complex single number digits adds numbers in between", (t: TestInterface) => {
	for (let i = 0; i < complexSingleNumberDigits.length; i++) {
		let length = 0;

		for (let j = 0; j < complexSingleNumberDigits[i].length; j++) {
			const digit = complexSingleNumberDigits[i][j];
			const splitUp = digit.split("-").map(Number);

			length = splitUp.length > 1 ? splitUp[1] - splitUp[0] + 1 : splitUp.length;
		}
		t.is(unfoldRanges(complexSingleNumberDigits[i]).length, length);
	}
});

const complexVariantNumberDigits = complexExpandedNumberDigits
	.filter(
		(digits: string[]): boolean => !digits
			.every((digit: string): boolean => digit.length === 1 || digit.length === 3)
	);

test("complex variant number digits have no hyphens", (t: TestInterface) => {
	for (let i = 0; i < complexVariantNumberDigits.length; i++) {
		t.true(
			unfoldRanges(complexVariantNumberDigits[i])
				.every((digit: string): boolean => !digit.match("-"))
		);
	}
});

test("complex variant number digits adds numbers in between", (t: TestInterface) => {
	for (let i = 0; i < complexVariantNumberDigits.length; i++) {
		let length = 0;

		for (let j = 0; j < complexVariantNumberDigits[i].length; j++) {
			const digit = complexVariantNumberDigits[i][j];
			const splitUp = digit.split("-").map(Number);

			length += splitUp.length > 1 ? splitUp[1] - splitUp[0] + 1 : splitUp.length;
		}
		t.is(unfoldRanges(complexVariantNumberDigits[i]).length, length);
	}
});

const complexMultiNumberDigits = Array(3)
	.fill()
	.map(
		(value: void, index: number): string[][] => complexVariantNumberDigits
			.filter(
				(digits: string[]): boolean => !digits
					.some(
						(digit: string): boolean => digit.length > (index * 2) + 5 ||
						(
							digit.length === (index * 2) + 3 &&
							!digit.match("-")
						)
					)
			)
			.map(
				(digits: string[]): string[] => digits
					.map(
						(digit: string): string => digit
							.split("-")
							.map((innerDigit: string): string => innerDigit.padStart(index + 2, "0"))
							.join("-")
					)
			)
	);

test("complex multi number digits have no hyphens", (t: TestInterface) => {
	for (let i = 0; i < complexMultiNumberDigits.length; i++) {
		for (let j = 0; j < complexMultiNumberDigits[i].length; j++) {
			t.true(
				unfoldRanges(complexMultiNumberDigits[i][j])
					.every((digit: string): boolean => !digit.match("-"))
			);
		}
	}
});

test("complex multi number digits adds numbers in between", (t: TestInterface) => {
	for (let i = 0; i < complexMultiNumberDigits.length; i++) {
		for (let j = 0; j < complexMultiNumberDigits[i].length; j++) {
			let length = 0;

			for (let k = 0; k < complexMultiNumberDigits[i][j].length; k++) {
				const digit = complexMultiNumberDigits[i][j][k];
				const splitUp = digit.split("-").map(Number);

				length += splitUp.length > 1 ? splitUp[1] - splitUp[0] + 1 : splitUp.length;
			}

			t.is(unfoldRanges(complexMultiNumberDigits[i][j]).length, length);
		}
	}
});
